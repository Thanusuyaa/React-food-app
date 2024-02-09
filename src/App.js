import React from "react";
import ReactDOM from "react-dom/client";


// header component
const Header =()=>{
  return(
    <div className="header">
         <div className="logo-container">
            <img className="logo"src="data:image/jpeg;base64,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"></img>
         </div>
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>
    </div>
  )
}

// Body component
const Body=()=>{
  return(
    <div className="Body">
        <div>
          <input className="search" type="" placeholder="Search"></input>
        </div>
        <div className="restro-container">
            <RestaurantCard resData={resList[0]}/> 
            <RestaurantCard resData={resList[1]}/>   
            <RestaurantCard resData={resList[2]}/>
            <RestaurantCard resData={resList[3]}/>
            <RestaurantCard resData={resList[4]}/>  
            <RestaurantCard resData={resList[5]}/>
            <RestaurantCard resData={resList[6]}/> 
            <RestaurantCard resData={resList[7]}/>   
            <RestaurantCard resData={resList[8]}/>
            <RestaurantCard resData={resList[9]}/>
            <RestaurantCard resData={resList[10]}/>
            <RestaurantCard resData={resList[11]}/>
            {/* // for limited data enties but gud practise to always go with loop. */}

            {/* // usually a gud practise to do */}
            {/* {resList.map((Restaurant,index) => (<RestaurantCard key{restaurant.data.id} resData={Restaurant}/>))
            } */}
            
            </div>
    </div>
  );
};

// card starts copy&paste
const resList =[
  {
    "info": {
      "id": "381853",
      "name": "ITC Master Chef Creations",
      "cloudinaryImageId": "b15a2367ff3d6f0bf92d1def3c1e5c59",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹650 for two",
      "cuisines": [
        "Punjabi",
        "Tandoor",
        "Mughlai",
      ],
      "avgRating": 4.4,
      "parentId": "11992",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 10:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/itc-master-chef-creations-koramangala-bangalore-381853",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "107443",
      "name": "Lo! - Low Carb and Keto Foods",
      "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
      "locality": "HSR Layout",
      "areaName": "HSR SECTOR 6",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Keto",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "8282",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-hsr-layout-hsr-sector-6-bangalore-107443",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "263485",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
      "locality": "Kormangala 8th Block",
      "areaName": "Kormangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.5,
      "parentId": "281782",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "241027",
      "name": "Namaste",
      "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
      "locality": "3rd Sector",
      "areaName": "Hsr Layout",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Thalis",
        "Biryani",
        "Indian"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "366271",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/namaste-3rd-sector-hsr-layout-bangalore-241027",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "305",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxydb9wvkadarapno4hk",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Indian",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74444",
      "name": "Samosa Party",
      "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Fast Food",
        "Punjabi",
        "Bakery"
      ],
      "avgRating": 4.4,
      "parentId": "6364",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-16 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "29627",
      "name": "BIB - Breakfast in the Box",
      "cloudinaryImageId": "nbcpg5xk6ekrrngmkd0b",
      "locality": "1st block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "American",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "45396",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 22:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bib-breakfast-in-the-box-1st-block-koramangala-bangalore-29627",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "125956",
      "name": "Glen's Bakehouse",
      "cloudinaryImageId": "whfviizdgvwg0uwfk8dy",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Continental",
        "Italian"
      ],
      "avgRating": 4.5,
      "parentId": "3220",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/glens-bakehouse-6th-block-koramangala-bangalore-125956",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "24990",
      "name": "Bhartiya Jalpan",
      "cloudinaryImageId": "cjwrgp1gmeu2nn5bcbyy",
      "locality": "Indiranagar",
      "areaName": "Indiranagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "Chaat"
      ],
      "avgRating": 4.3,
      "parentId": "7518",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-indiranagar-bangalore-24990",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50467",
      "name": "Bakingo",
      "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
      ],
      "avgRating": 4.3,
      "parentId": "3818",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "107605",
      "name": "Aubree",
      "cloudinaryImageId": "a7fce3b2877c4dbfba249221049182bf",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "3807",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹899",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/aubree-6th-block-koramangala-bangalore-107605",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23678",
      "name": "McDonald's",
      "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 03:15:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "38634",
      "name": "Third Wave Coffee",
      "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "avgRating": 4.5,
      "parentId": "274773",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/third-wave-coffee-koramangala-bangalore-38634",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "8732",
      "name": "Krispy Kreme",
      "cloudinaryImageId": "u3jhbmuu1pbyp51yj2ga",
      "locality": "Indiranagar",
      "areaName": "Indiranagar",
      "costForTwo": "₹170 for two",
      "cuisines": [
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "570",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/krispy-kreme-indiranagar-bangalore-8732",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "70246",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "182191ab163770437b62861a6f987709",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "parentId": "195515",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5167",
      "name": "Theobroma",
      "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
      "locality": "2nd stage",
      "areaName": "Indiranagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-09 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
            "shortDescription": "Perfect Cake Delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                  "shortDescription": "Perfect Cake Delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-2nd-stage-indiranagar-bangalore-5167",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "676",
      "name": "Chai Point",
      "cloudinaryImageId": "ygpt52g5s8fzopfaac2l",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "North Indian",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food"
      ],
      "avgRating": 4.4,
      "parentId": "1607",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-point-7th-block-koramangala-bangalore-676",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "408386",
      "name": "NOTO - Ice Creams & Desserts",
      "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
      "locality": "Ejipura",
      "areaName": "Koramangla",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "468478",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 05:55:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-ejipura-koramangla-bangalore-408386",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "295133",
      "name": "McDonald's Gourmet Burger Collection",
      "cloudinaryImageId": "q0astez5jmmfo5icayde",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "10761",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-02-10 03:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-5th-block-koramangala-bangalore-295133",
      "type": "WEBLINK"
    }
  }
];
// card ends copy paste





// retro card component
// const RestaurantCard = ({resName,cuisine}) =>{}    another way of giving values to props which is also called destructuring.
const RestaurantCard=(props)=>{
  const {resData} = props;
  return(
          <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>    
          {/* style backgroundColor is given as inline css */}
            <img  className="icon" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/" + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>       
            <h4>{resData.info.cuisines.join(",")} </h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.costForTwo} </h4>
         </div>
     );
};

// Style Card
// const styleCard = {
//   backgroundColor:"#f0f0f0",
// };

function AppLayout() {
  return (
    <div className="App">
       <Header/>
       <Body/>
     </div>
  );
}





export default AppLayout;