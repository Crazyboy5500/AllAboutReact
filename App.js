import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/82/ba/7d/82ba7db3760b88da021a340ee9eb861e.jpg" alt="logo image" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestrauntCard = (props) => {
    // console.log(props);
    // const {resData.info.name, resData.info.cuisines, resData.info.costForTwo, resData.info.sla, resData.info.cloudinaryImageId, resData.info.avgRating} = props;
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
            } alt="kfc" />
            <h3> {name}</h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} stars</h4>
            <h4> {sla.deliveryTime} minutes</h4>
            <h4> cost {costForTwo} </h4>
        </div>
    );
};

const resObj = {
    info: {
        id: "1003414",
        name: "Pizza But",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
        locality: "Chhindwara",
        areaName: "Chhindwara City",
        costForTwo: "₹350 for two",
        cuisines: [
            "Pizzas", "burger"
        ],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "184",
        sla: {
            deliveryTime: 62,
            lastMileTravel: 14.1,
            serviceability: "SERVICEABLE",
            slaString: "60-65 mins",
            lastMileTravelString: "14.1 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2025-09-22 00:00:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "66% OFF",
            subHeader: "UPTO ₹126",
            headerTypeV2: 12
        },
        orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {}
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
            aggregatedRating: {
                rating: "--"
            }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
}

const resList = [
    {
        info: {
            id: "168027",
            name: "KFC",
            city: "Bathinda",
            slugs: {
                restaurant: "kfc-bharat-nagar-test-bathinda",
                city: "bathinda"
            },
            uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4f1aaf19-7eaa-4271-9d00-5ab3f6acfec1_168027.JPG",
            locality: "Bathinda Road",
            areaName: "Bibi Wala Road",
            costForTwo: "40000",
            costForTwoMessage: "₹400 for two",
            cuisines: [
                "Burgers",
                "Fast Food"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "168027",
                fees: [
                    {}
                ]
            },
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "4.6K+ ratings",
            sla: {
                restaurantId: "168027",
                deliveryTime: 20,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 1053,
                slaString: "20-25 MINS",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-03 01:30:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {}
            },
            aggregatedDiscountInfo: {
                header: "Get items under 119",
                shortDescriptionList: [
                    {
                        meta: "99 store",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT"
                    },
                    {
                        meta: "30% off | Use SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "99 store",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT"
                    },
                    {
                        meta: "30% off up to ₹75 | Use code SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                visible: true
            },
            badges: {},
            slugString: "kfc-bharat-nagar-test-bathinda",
            multiOutlet: true,
            isOpen: true,
            labels: [
                {
                    title: "Timings",
                    message: "null"
                },
                {
                    title: "Address",
                    message: "KFC RESTAURANT, FOOD STREET, NEXT TO DHILLON GYM, BIBI WALA ROAD, BHARAT NAGAR, BHATINDA, PUNJAB 151001"
                },
                {
                    title: "Cuisines",
                    message: "Burgers,Fast Food"
                }
            ],
            totalRatings: 4600,
            aggregatedDiscountInfoV2: {
                header: "Get items under 119",
                shortDescriptionList: [
                    {
                        meta: "99 store",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT"
                    },
                    {
                        meta: "30% off | Use SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "99 store",
                        discountType: "FinalPrice",
                        operationType: "RESTAURANT"
                    },
                    {
                        meta: "30% off up to ₹75 | Use code SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                couponDetailsCta: "View coupon details"
            },
            type: "F",
            nudgeBanners: [
                {
                    priority: 9,
                    discountInfo: {
                        discountType: "FinalPrice",
                        value: 700
                    },
                    unlockedMessage: "Deal of the Day unlocked!",
                    minItemCount: 1,
                    maxItemCount: 1,
                    type: "SILD",
                    nudgeTagInfo: {
                        title: "Deal of the Day",
                        fontName: "FONT_NAME_CONDENSED_BOLD"
                    },
                    logoCtx: {}
                }
            ],
            headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/168027"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "Free delivery on orders above ₹99"
            },
            ratingSlab: "RATING_SLAB_5",
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            hasBestsellerItems: true,
            cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {}
            },
            latLong: "30.2199937,74.9545936",
            backgroundImageOverlayInfo: {},
            featuredSectionInfo: {},
            requestContexts: [
                "enable_ecosaver",
                "99store"
            ],
            dishStyle: {
                socialMarkerStyle: [
                    {
                        socialMarkerType: "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                        title: "Protein Rich",
                        textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                        textColor: "highlight"
                    },
                    {
                        socialMarkerType: "SOCIAL_MARKER_TYPE_BESTSELLER",
                        title: "Bestseller",
                        textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                        textColor: "color_swiggy_one"
                    }
                ]
            }
        }
    },
    {
        info: {
            id: "104380",
            name: "Domino's Pizza",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa95a724-3fc3-4a9c-a25f-c11b05331b99_104380.JPG",
            locality: "Bhagu Road",
            areaName: "Civil Lines",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            avgRating: 4.2,
            parentId: "2456",
            avgRatingString: "4.2",
            totalRatingsString: "3.1K+",
            promoted: true,
            adTrackingId: "cid=33412813~p=0~adgrpid=33412813#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104380~plpr=COLLECTION~eid=5f0e769a-2622-4e63-bc8f-67ea12255247~srvts=1759393000800~collid=83631",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33412813"
        }
    },
    {
        info: {
            id: "286786",
            name: "Pizza Bites",
            cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/7/6/45cdd9d4-c404-4c8f-bafa-433293d406b6_405a334a-4f32-4870-b15c-f13563f6c082.jpg",
            locality: "Partap Nagar",
            areaName: "100 feet road, Bathinda",
            costForTwo: "₹100 for two",
            cuisines: [
                "Pizzas"
            ],
            avgRating: 4,
            parentId: "158354",
            avgRatingString: "4.0",
            totalRatingsString: "796",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:59:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹29",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        info: {
            id: "994538",
            name: "Bikanervala",
            cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/4/2/17ac1285-cfc0-491b-8e07-fe7d5be09ca7_d888917c-e491-432d-a779-c43cdfa692de.jpg",
            locality: "Near Puda Phase IV and V",
            areaName: "Green Palace Road",
            costForTwo: "₹400 for two",
            cuisines: [
                "Indian",
                "Continental",
                "Chinese",
                "Snacks"
            ],
            avgRating: 4.2,
            veg: true,
            parentId: "45936",
            avgRatingString: "4.2",
            totalRatingsString: "126",
            promoted: true,
            adTrackingId: "cid=33413689~p=1~adgrpid=33413689#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=994538~plpr=COLLECTION~eid=adc5c653-6736-4d36-9ed2-f70fc7b8e401~srvts=1759393000800~collid=83631",
            sla: {
                deliveryTime: 32,
                lastMileTravel: 6.1,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "6.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33413689"
        }
    },
    {
        info: {
            id: "109940",
            name: "Hot & Fresh Canadian Pizza",
            cloudinaryImageId: "ccec7a731bcff24d1ac23880fc02403c",
            locality: "Bhagu Road",
            areaName: "100 Feet Road",
            costForTwo: "₹250 for two",
            cuisines: [
                "Pizzas",
                "Italian"
            ],
            avgRating: 4.5,
            veg: true,
            parentId: "21783",
            avgRatingString: "4.5",
            totalRatingsString: "2.9K+",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 22:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        description: "OnlyOnSwiggy"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                    description: "OnlyOnSwiggy"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    }, {
        info: {
            id: "1011617",
            name: "Oven Story Pizza",
            cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/5/13/2107de9b-4b8b-40f9-b1c4-31c3c7b0fe8e_4291a6c6-4ccb-4a3c-85db-0e31b94ffe46.jpeg",
            locality: "GT Road",
            areaName: "Near Namdev Gate Main",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.2,
            parentId: "3534",
            avgRatingString: "4.2",
            totalRatingsString: "181",
            promoted: true,
            adTrackingId: "cid=33450706~p=3~adgrpid=33450706#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1011617~plpr=COLLECTION~eid=12996452-8c62-4462-8b21-db12632c38f9~srvts=1759393000800~collid=83631",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33450706"
        }
    },
    {
        info: {
            id: "543974",
            name: "Pizza Classic",
            cloudinaryImageId: "15e1efcf2ca0dd352bea585c1935e39c",
            locality: "Pukhraj colony,Gali No.8",
            areaName: "QILA ROAD",
            costForTwo: "₹130 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Fast Food"
            ],
            avgRating: 3.7,
            parentId: "252697",
            avgRatingString: "3.7",
            totalRatingsString: "130",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 0.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "0.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:45:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "android/static-assets/icons/big_rx.png",
                                    description: "bolt!"
                                }
                            },
                            {
                                attributes: {
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                    description: "pureveg"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹50 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        info: {
            id: "1011611",
            name: "Navratri Meals by Lunchbox",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/22/a35aec88-7d55-438f-af6f-c78add116043_1011611.JPG",
            locality: "GT Road",
            areaName: "Near Namdev Gate Main",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4,
            parentId: "21938",
            avgRatingString: "4.0",
            totalRatingsString: "20",
            promoted: true,
            adTrackingId: "cid=33450895~p=4~adgrpid=33450895#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1011611~plpr=COLLECTION~eid=641d0de0-9102-419b-927a-fd7380890d9d~srvts=1759393000800~collid=83631",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33450895"
        }
    }, {
        info: {
            id: "1011605",
            name: "Wendy's Burgers",
            cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/4/14/fbac7c97-d2d7-48ae-9faf-d82c2c1fbf95_533bc45e-efa3-4165-b319-18954dded4bb.jpeg",
            locality: "GT Road",
            areaName: "Near Namdev Gate Main",
            costForTwo: "₹200 for two",
            cuisines: [
                "Burgers",
                "American",
                "Fast Food",
                "Snacks"
            ],
            avgRating: 4.5,
            parentId: "972",
            avgRatingString: "4.5",
            totalRatingsString: "650",
            promoted: true,
            adTrackingId: "cid=33450896~p=0~adgrpid=33450896#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1011605~plpr=COLLECTION~eid=4c773113-3628-44d1-93a8-560f43c66161~srvts=1759393308556~collid=83669",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33450896"
        }
    },
    {
        info: {
            id: "284183",
            name: "Food Bazar",
            cloudinaryImageId: "krksmdiz1ggkiqvkpdcb",
            locality: "Model Town",
            areaName: "Model Town",
            costForTwo: "₹350 for two",
            cuisines: [
                "North Indian",
                "Snacks",
                "Pizzas",
                "Chinese",
                "Chaat"
            ],
            avgRating: 4.6,
            parentId: "80979",
            avgRatingString: "4.6",
            totalRatingsString: "44K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 0.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "0.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-03 01:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    },
                    {
                        imageId: "Rxawards/_CATEGORY-Mithai.png",
                        description: "Delivery!"
                    },
                    {
                        imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textExtendedBadges: {},
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "android/static-assets/icons/big_rx.png",
                                    description: "bolt!"
                                }
                            },
                            {
                                attributes: {
                                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                                    description: "Delivery!"
                                }
                            },
                            {
                                attributes: {
                                    imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                                    description: "Delivery!"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.4",
                    ratingCount: "11K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        info: {
            id: "248278",
            name: "AAR KAY Vaishno Dhaba (Nakodar Road)",
            cloudinaryImageId: "siiyygdsewrchwglfyre",
            locality: "Abadpura",
            areaName: "Nakodar Chowk",
            costForTwo: "₹250 for two",
            cuisines: [
                "Chinese"
            ],
            avgRating: 4.6,
            veg: true,
            parentId: "25988",
            avgRatingString: "4.6",
            totalRatingsString: "37K+",
            promoted: true,
            adTrackingId: "cid=33525183~p=1~adgrpid=33525183#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=248278~plpr=COLLECTION~eid=59db8d6f-3b5a-4e1a-8a3e-2b9c5d975cd4~srvts=1759388608647~collid=80382",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textExtendedBadges: {},
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                                    description: "Delivery!"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹120 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL"
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33525183"
        }
    },
    {
        info: {
            id: "283662",
            name: "Aggarwal Vaishno Dhaba",
            cloudinaryImageId: "l68iq6yh6tenyntrxwgb",
            locality: "Model Town",
            areaName: "Model Town",
            costForTwo: "₹250 for two",
            cuisines: [
                "Punjabi",
                "Afghani",
                "Chinese"
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "27734",
            avgRatingString: "4.4",
            totalRatingsString: "20K+",
            promoted: true,
            adTrackingId: "cid=33525191~p=3~adgrpid=33525191#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=283662~plpr=COLLECTION~eid=237bef8e-e3a6-4950-89c4-505ac4430b8e~srvts=1759388608647~collid=80382",
            sla: {
                deliveryTime: 42,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "40-50 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                        description: "Delivery!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                                    description: "Delivery!"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {},
                    textBased: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.0",
                    ratingCount: "3.7K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33525191"
        }
    },
    {
        info: {
            id: "262007",
            name: "Oberoi Special Chana Bhatura",
            cloudinaryImageId: "kjq2atg6kr7h8hhqcbqr",
            locality: "Jyoti Chowk",
            areaName: "Jyoti Chowk",
            costForTwo: "₹180 for two",
            cuisines: [
                "Street Food",
                "Chaat",
                "Fast Food",
                "Ice Cream",
                "Snacks"
            ],
            avgRating: 4.6,
            veg: true,
            parentId: "150862",
            avgRatingString: "4.6",
            totalRatingsString: "2.2K+",
            sla: {
                deliveryTime: 14,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "10-15 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 17:45:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "android/static-assets/icons/big_rx.png",
                        description: "bolt!"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "android/static-assets/icons/big_rx.png",
                                    description: "bolt!"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        info: {
            id: "957180",
            name: "Sarb Food Court",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/23/40814702-9198-4fa4-9e60-abdce0664414_957180.jpg",
            locality: "Sarb Multiplex,",
            areaName: "North_Jalandhar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Chinese",
                "Desserts",
                "Beverages",
                "Snacks",
                "Pizzas",
                "Pastas",
                "Fast Food",
                "Burgers",
                "Cafe"
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "561457",
            avgRatingString: "4.4",
            totalRatingsString: "100",
            promoted: true,
            adTrackingId: "cid=33523093~p=4~adgrpid=33523093#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=957180~plpr=COLLECTION~eid=615b6859-91a7-46da-948c-66fa471042ca~srvts=1759388608647~collid=80382",
            sla: {
                deliveryTime: 38,
                lastMileTravel: 4.2,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "4.2 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 22:45:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {},
                    textBased: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33523093"
        }
    },
    {
        info: {
            id: "152394",
            name: "Sagar Ratna",
            cloudinaryImageId: "rba2qwdh4k9y1ilawzj3",
            locality: "Model Town Road",
            areaName: "Lajpat Nagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "South Indian",
                "North Indian",
                "Chinese",
                "Snacks",
                "Biryani",
                "Desserts"
            ],
            avgRating: 4.5,
            parentId: "793",
            avgRatingString: "4.5",
            totalRatingsString: "2.4K+",
            sla: {
                deliveryTime: 22,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    imageId: "newg.png",
                                    description: "Gourmet"
                                }
                            }
                        ]
                    },
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        info: {
            id: "94254",
            name: "Rabi Dana Pani",
            cloudinaryImageId: "psua1urw0bsyw3kzcudd",
            locality: "Model Town",
            areaName: "Model Town",
            costForTwo: "₹250 for two",
            cuisines: [
                "Biryani",
                "Chinese",
                "Tandoor",
                "Beverages",
                "Desserts"
            ],
            avgRating: 4.5,
            veg: true,
            parentId: "164099",
            avgRatingString: "4.5",
            totalRatingsString: "7.6K+",
            promoted: true,
            adTrackingId: "cid=33574663~p=5~adgrpid=33574663#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=94254~plpr=COLLECTION~eid=4e99ebbe-c46f-4d31-ba4f-8b4d39c121fc~srvts=1759388608647~collid=80382",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 3.9,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹79",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY",
                exclusiveOfferMessage: "EXTRA 11% OFF"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "1.4K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            campaignId: "33574663"
        }
    },
    {
        info: {
            id: "575581",
            name: "Nagpal Cholle Bhature",
            cloudinaryImageId: "gab58gefkqmk6frqjups",
            locality: "Mall Road",
            areaName: "Model Town",
            costForTwo: "₹200 for two",
            cuisines: [
                "Indian",
                "Punjabi",
                "Snacks",
                "Beverages"
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "345032",
            avgRatingString: "4.4",
            totalRatingsString: "1.2K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2025-10-02 17:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    textBased: {},
                    imageBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75",
                logoCtx: {
                    text: "BENEFITS"
                }
            },
            loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                    text: "BENEFITS",
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--"
                }
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    }

]

const Body = () => {
    return (
        <div className="body">
            <div className="search">SEARCH HERE!</div>
            <div className="res-container">
                {/* <RestrauntCard resData={resObj} /> */}

                {resList.map(
                    (restaurant) => (
                        <RestrauntCard key={restaurant.info.id} resData={restaurant} />
                    )
                )}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            {<Header />}
            {<Body />}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);