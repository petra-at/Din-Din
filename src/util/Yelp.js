const apiKey = 'U8LIgJPdXEqQdOJWdagTx1mGhq5_n0A2QmYNNMB7rjyrAtZhYTCGA9N1Vx5PFNci-quO7RhlU90pcM1jMqwGWKiRLM1Xdb-rOY6BktIZRFxfGzWO71RX77sPT6OLXXYx';

const Yelp={  
 async search(term,location,sortBy){
    
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });

        const jsonResponse = await response.json();
        if (jsonResponse.businesses)
            return jsonResponse.businesses.map((business) => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        else
            return 'No businesses';
    }
}

export default Yelp;