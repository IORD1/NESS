// PoiList.jsx
import React from 'react';

const PoiList = () => {

  const backgroundColors = ["#ec3a5a", "#fb8231","#20bf6b","#349cdb","#3e6dd7","#8c59d0","#5f8670","#ef4040","#a367b1","#65b741","#b2533e"];

const getRandomIndex = () => Math.floor(Math.random() * backgroundColors.length);


    const poiCategories = 
    [
      {
        "id": 7320,
        "name": "Sports Center",
        "childCategoryIds": [
          7320002,
          7320003,
          7320006,
          7320005
        ],
        "synonyms": [
          "Sports Centre"
        ]
      },
      {
        "id": 7374,
        "name": "Stadium",
        "childCategoryIds": [
          7374002,
          7374009,
          7374012,
          7374003,
          7374010,
          7374005,
          7374008,
          7374011,
          7374006,
          7374014,
          7374013,
          7374007,
          7374004
        ],
        "synonyms": [
          "Sports Stadium",
          "Arena"
        ]
      },
      {
        "id": 7315,
        "name": "Restaurant",
        "childCategoryIds": [
          7315081,
          7315002,
          7315082,
          7315003,
          7315083,
          7315084,
          7315085,
          7315062,
          7315086,
          7315004,
          7315146,
          7315005,
          7315087,
          7315006,
          7315007,
          7315088,
          7315089,
          7315072,
          7315008,
          7315142,
          7315090,
          7315091,
          7315147,
          7315009,
          7315092,
          7315010,
          7315011,
          7315070,
          7315093,
          7315012,
          7315094,
          7315095,
          7315063,
          7315013,
          7315096,
          7315097,
          7315068,
          7315098,
          7315099,
          7315057,
          7315079,
          7315014,
          7315100,
          7315101,
          7315132,
          7315102,
          7315133,
          7315015,
          7315016,
          7315104,
          7315134,
          7315017,
          7315071,
          7315018,
          7315019,
          7315020,
          7315054,
          7315069,
          7315021,
          7315058,
          7315052,
          7315022,
          7315078,
          7315023,
          7315024,
          7315073,
          7315105,
          7315065,
          7315106,
          7315025,
          7315066,
          7315026,
          7315027,
          7315028,
          7315067,
          7315029,
          7315030,
          7315107,
          7315135,
          7315108,
          7315031,
          7315109,
          7315032,
          7315033,
          7315034,
          7315110,
          7315074,
          7315136,
          7315111,
          7315112,
          7315075,
          7315035,
          7315127,
          7315061,
          7315036,
          7315037,
          7315129,
          7315038,
          7315130,
          7315039,
          7315041,
          7315131,
          7315040,
          7315143,
          7315042,
          7315113,
          7315114,
          7315115,
          7315043,
          7315053,
          7315055,
          7315056,
          7315116,
          7315117,
          7315080,
          7315139,
          7315064,
          7315140,
          7315044,
          7315045,
          7315118,
          7315046,
          7315148,
          7315119,
          7315047,
          7315120,
          7315059,
          7315145,
          7315076,
          7315121,
          7315048,
          7315122,
          7315123,
          7315049,
          7315124,
          7315050,
          7315125,
          7315051,
          7315126,
          7315060,
          7315149
        ],
        "synonyms": [
          "Dining",
          "Eating Place",
          "Eating House",
          "Eatery"
        ]
      },
      {
        "id": 9376,
        "name": "Café/Pub",
        "childCategoryIds": [
          9376002,
          9376006,
          9376004,
          9376007,
          9376003,
          9376005
        ],
        "synonyms": []
      },
      {
        "id": 9663,
        "name": "Health Care Service",
        "childCategoryIds": [
          9663005,
          9663004,
          9663003,
          9663002
        ],
        "synonyms": []
      },
      {
        "id": 7321,
        "name": "Hospital",
        "childCategoryIds": [
          7321005,
          7321004,
          7321003,
          7321002
        ],
        "synonyms": [
          "Clinic",
          "Hospital/Polyclinic",
          "Polyclinic"
        ]
      },
      {
        "id": 9373,
        "name": "Doctor",
        "childCategoryIds": [
          9373002,
          9373003
        ],
        "synonyms": [
          "Medical Practitioner",
          "Medical Office",
          "MD",
          "Doc",
          "Doctor's Office"
        ]
      },
      {
        "id": 9361,
        "name": "Shop",
        "childCategoryIds": [
          9361073,
          9361048,
          9361049,
          9361058,
          9361067,
          9361050,
          9361072,
          9361083,
          9361002,
          9361003,
          9361044,
          9361082,
          9361004,
          9361005,
          9361006,
          9361007,
          9361079,
          9361008,
          9361042,
          9361009,
          9361060,
          9361076,
          9361051,
          9361010,
          9361052,
          9361011,
          9361012,
          9361013,
          9361014,
          9361016,
          9361017,
          9361018,
          9361019,
          9361020,
          9361021,
          9361022,
          9361023,
          9361024,
          9361025,
          9361054,
          9361026,
          9361055,
          9361027,
          9361069,
          9361053,
          9361028,
          9361029,
          9361030,
          9361031,
          9361032,
          9361080,
          9361033,
          9361034,
          9361035,
          9361036,
          9361045,
          9361056,
          9361071,
          9361065,
          9361043,
          9361075,
          9361059,
          9361068,
          9361037,
          9361038,
          9361070,
          9361064,
          9361046,
          9361047,
          9361015,
          9361057,
          9361063,
          9361078,
          9361062,
          9361061,
          9361039,
          9361074,
          9361077,
          9361040,
          9361041,
          9361081,
          9361066
        ],
        "synonyms": [
          "Store"
        ]
      },
      {
        "id": 9364,
        "name": "Marijuana Dispensary",
        "childCategoryIds": [
          9364002,
          9364003
        ],
        "synonyms": []
      },
      {
        "id": 7332,
        "name": "Market",
        "childCategoryIds": [
          7332004,
          7332002,
          7332003,
          7332005
        ],
        "synonyms": []
      },
      {
        "id": 9932,
        "name": "Public Amenity",
        "childCategoryIds": [
          9932002,
          9932003,
          9932004,
          9932006,
          9932005
        ],
        "synonyms": []
      },
      {
        "id": 7301,
        "name": "Road Traffic Control Center",
        "childCategoryIds": [
          7301002
        ],
        "synonyms": [
          "Traffic Service Centre",
          "Traffic Service Center"
        ]
      },
      {
        "id": 7324,
        "name": "Post Office",
        "childCategoryIds": [
          7324002,
          7324003
        ],
        "synonyms": [
          "Post",
          "Postal Service"
        ]
      },
      {
        "id": 7377,
        "name": "College/University",
        "childCategoryIds": [
          7377002,
          7377003
        ],
        "synonyms": [
          "University",
          "College",
          "Tertiary Education",
          "Uni"
        ]
      },
      {
        "id": 7369,
        "name": "Open Parking Area",
        "childCategoryIds": [
          7369002,
          7369003,
          7369004
        ],
        "synonyms": [
          "Parking Lot",
          "Outdoor Lot",
          "Open Parking",
          "Outdoor Parking"
        ]
      },
      {
        "id": 9937,
        "name": "Club & Association",
        "childCategoryIds": [
          9937002,
          9937003
        ],
        "synonyms": []
      },
      {
        "id": 7360,
        "name": "Campground",
        "childCategoryIds": [
          7360003,
          7360002
        ],
        "synonyms": [
          "Camp Site",
          "Camping Ground",
          "Camp Ground",
          "Camping Site",
          "Campsite",
          "Camping",
          "Camping Area"
        ]
      },
      {
        "id": 7304,
        "name": "Vacation Rental",
        "childCategoryIds": [
          7304006,
          7304004,
          7304005,
          7304002,
          7304003
        ],
        "synonyms": [
          "Holiday Rental"
        ]
      },
      {
        "id": 9902,
        "name": "Amusement Park",
        "childCategoryIds": [
          9902002,
          9902003,
          9902004
        ],
        "synonyms": []
      },
      {
        "id": 7303,
        "name": "Residential Accommodations",
        "childCategoryIds": [
          7303006,
          7303003,
          7303004,
          7303002,
          7303005
        ],
        "synonyms": [
          "Residential Accommodation"
        ]
      },
      {
        "id": 7335,
        "name": "Agricultural Business",
        "childCategoryIds": [
          7335004,
          7335002,
          7335003
        ],
        "synonyms": [
          "Agriculture Business"
        ]
      },
      {
        "id": 7383,
        "name": "Airport",
        "childCategoryIds": [
          7383005,
          7383004,
          7383003,
          7383002
        ],
        "synonyms": [
          "Aerodrome"
        ]
      },
      {
        "id": 9352,
        "name": "Company",
        "childCategoryIds": [
          9352003,
          9352012,
          9352034,
          9352045,
          9352013,
          9352041,
          9352035,
          9352025,
          9352027,
          9352039,
          9352040,
          9352043,
          9352014,
          9352029,
          9352004,
          9352005,
          9352032,
          9352006,
          9352038,
          9352036,
          9352044,
          9352042,
          9352007,
          9352037,
          9352023,
          9352008,
          9352011,
          9352016,
          9352031,
          9352033,
          9352021,
          9352030,
          9352018,
          9352017,
          9352019,
          9352009,
          9352010,
          9352002,
          9352022,
          9352026,
          9352020,
          9352024,
          9352046,
          9352015
        ],
        "synonyms": [
          "Firm",
          "Establishment",
          "Institution",
          "Enterprise",
          "Employment",
          "Organization",
          "Organisation",
          "Corporation"
        ]
      },
      {
        "id": 9379,
        "name": "Nightlife",
        "childCategoryIds": [
          9379004,
          9379006,
          9379009,
          9379002,
          9379008,
          9379010,
          9379003,
          9379007
        ],
        "synonyms": []
      },
      {
        "id": 7310,
        "name": "Repair Shop",
        "childCategoryIds": [
          7310002,
          7310003,
          7310004,
          7310008,
          7310005,
          7310006,
          7310009,
          7310007
        ],
        "synonyms": [
          "Mechanic Shop",
          "Car Servicing",
          "Vehicle Repair",
          "Workshop",
          "Service Department",
          "MOT",
          "Car Workshop",
          "Car Repair",
          "Car Mechanic",
          "Servicing",
          "Garage",
          "Mechanic",
          "Service Centre",
          "Repair Facility"
        ]
      },
      {
        "id": 7314,
        "name": "Hotel/Motel",
        "childCategoryIds": [
          7314002,
          7314007,
          7314004,
          7314003,
          7314006,
          7314005,
          7314008
        ],
        "synonyms": []
      },
      {
        "id": 7372,
        "name": "School",
        "childCategoryIds": [
          7372012,
          7372003,
          7372015,
          7372016,
          7372006,
          7372010,
          7372014,
          7372004,
          7372005,
          7372002,
          7372007,
          7372013,
          7372011,
          7372009,
          7372008
        ],
        "synonyms": [
          "Educational Institution"
        ]
      },
      {
        "id": 9910,
        "name": "Automotive Dealer",
        "childCategoryIds": [
          9910009,
          9910004,
          9910008,
          9910002,
          9910003,
          9910005,
          9910006,
          9910007
        ],
        "synonyms": [
          "Dealership",
          "Dealer",
          "Vehicle Sales",
          "Auto Dealer"
        ]
      },
      {
        "id": 9927,
        "name": "Zoo, Arboretum & Botanical Garden",
        "childCategoryIds": [
          9927004,
          9927002,
          9927005,
          9927003
        ],
        "synonyms": []
      },
      {
        "id": 7342,
        "name": "Movie Theater",
        "childCategoryIds": [
          7342003
        ],
        "synonyms": [
          "Picture Theatre",
          "Movie House",
          "Movie Hall",
          "Film House",
          "The Pictures",
          "Cinema",
          "Silver Screen",
          "Movie Theatre",
          "Picture House",
          "The Movies",
          "Big Screen",
          "Cinema Hall",
          "Picture Theater",
          "Movies"
        ]
      },
      {
        "id": 7318,
        "name": "Theater",
        "childCategoryIds": [
          7318007,
          7318006,
          7318002,
          7318008,
          7318003,
          7318004,
          7318005
        ],
        "synonyms": [
          "Theatre",
          "Play House",
          "Playhouse"
        ]
      },
      {
        "id": 9362,
        "name": "Park & Recreation Area",
        "childCategoryIds": [
          9362002,
          9362032,
          9362003,
          9362017,
          9362016,
          9362015,
          9362004,
          9362005,
          9362006,
          9362007,
          9362030,
          9362025,
          9362008,
          9362009,
          9362033,
          9362010,
          9362011,
          9362013,
          9362026,
          9362014,
          9362036
        ],
        "synonyms": [
          "Park and Recreation Area"
        ]
      },
      {
        "id": 7339,
        "name": "Place of Worship",
        "childCategoryIds": [
          7339007,
          7339002,
          7339006,
          7339003,
          7339008,
          7339004,
          7339005
        ],
        "synonyms": [
          "House of Prayer",
          "House of Worship",
          "House of God",
          "Prayer Hall"
        ]
      },
      {
        "id": 7376,
        "name": "Tourist Attraction",
        "childCategoryIds": [
          7376012,
          7376010,
          7376002,
          7376007,
          7376011,
          7376003,
          7376005,
          7376006,
          7376013,
          7376009,
          7376008,
          7376014,
          7376004
        ],
        "synonyms": [
          "Important Tourist Attraction",
          "Place of Interest",
          "Tourist Place",
          "Local Attraction",
          "Sight Seeing Place"
        ]
      },
      {
        "id": 7302,
        "name": "Trails",
        "childCategoryIds": [
          7302003,
          7302004,
          7302002,
          7302006,
          7302005
        ],
        "synonyms": [
          "Trail Network",
          "Trail System"
        ]
      },
      {
        "id": 7380,
        "name": "Railroad Station",
        "childCategoryIds": [
          7380004,
          7380002,
          7380005,
          7380003,
          7380006
        ],
        "synonyms": [
          "Train Stop",
          "Rail Station",
          "Station",
          "Train Station",
          "Railway Station"
        ]
      },
      {
        "id": 9942,
        "name": "Public Transportation Stop",
        "childCategoryIds": [
          9942002,
          9942005,
          9942003,
          9942004
        ],
        "synonyms": [
          "Public Transport",
          "Public Transport Stop",
          "Public Transit Stop",
          "Public Transport Station",
          "Public Transit",
          "Public Transport Terminus"
        ]
      },
      {
        "id": 9160,
        "name": "Exchange",
        "childCategoryIds": [
          9160003,
          9160002
        ],
        "synonyms": []
      },
      {
        "id": 7347,
        "name": "Marina",
        "childCategoryIds": [
          7347002,
          7347003
        ],
        "synonyms": [
          "Boat Basin"
        ]
      },
      {
        "id": 7359,
        "name": "Weigh Station",
        "childCategoryIds": [
          7359003
        ],
        "synonyms": [
          "Weigh Scales"
        ]
      },
      {
        "id": 9155,
        "name": "Car Wash",
        "childCategoryIds": [
          9155003
        ],
        "synonyms": [
          "Carwash",
          "Auto Wash"
        ]
      },
      {
        "id": 9378,
        "name": "Leisure Center",
        "childCategoryIds": [
          9378002,
          9378003,
          9378004,
          9378005,
          9378006
        ],
        "synonyms": [
          "Leisure Facilities",
          "Leisure Centre"
        ]
      },
      {
        "id": 7389,
        "name": "Access Gateway",
        "childCategoryIds": [
          7389002,
          7389004,
          7389003
        ],
        "synonyms": []
      },
      {
        "id": 8099,
        "name": "Geographic Feature",
        "childCategoryIds": [
          8099016,
          8099020,
          8099003,
          8099017,
          8099005,
          8099018,
          8099025,
          8099022,
          8099019,
          8099027,
          8099023,
          8099021,
          8099002,
          8099011,
          8099009,
          8099007,
          8099008,
          8099026,
          8099015,
          8099014,
          8099013,
          8099004,
          8099024,
          8099012,
          8099006,
          8099010
        ],
        "synonyms": []
      },
      {
        "id": 7380004,
        "name": "Urban Station",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7302003,
        "name": "Adventure Vehicle Trail",
        "childCategoryIds": [],
        "synonyms": [
          "Off Road Track"
        ]
      },
      {
        "id": 9352003,
        "name": "Advertising Company",
        "childCategoryIds": [],
        "synonyms": [
          "Marketing Company",
          "Advert Agency",
          "Ad Agency",
          "Advertising Agency",
          "Marketing"
        ]
      },
      {
        "id": 7315081,
        "name": "Afghan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Afghan Cuisine",
          "Afghan Food"
        ]
      },
      {
        "id": 7315002,
        "name": "African Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "African Cuisine",
          "African Food"
        ]
      },
      {
        "id": 9361073,
        "name": "Agricultural Supplies",
        "childCategoryIds": [],
        "synonyms": [
          "Farming Supplies",
          "Farm Supplies"
        ]
      },
      {
        "id": 9352012,
        "name": "Agricultural Technology",
        "childCategoryIds": [],
        "synonyms": [
          "Farming Technology"
        ]
      },
      {
        "id": 7383005,
        "name": "Airfield",
        "childCategoryIds": [],
        "synonyms": [
          "Aerodrome"
        ]
      },
      {
        "id": 9352034,
        "name": "Airline Company",
        "childCategoryIds": [],
        "synonyms": [
          "Airline"
        ]
      },
      {
        "id": 7389002,
        "name": "Airline Access",
        "childCategoryIds": [],
        "synonyms": [
          "Terminal",
          "Airport Terminal"
        ]
      },
      {
        "id": 7315082,
        "name": "Algerian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Algerian Cuisine",
          "Algerian Food"
        ]
      },
      {
        "id": 9663005,
        "name": "Ambulance Unit",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315003,
        "name": "American Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "American Food",
          "American Cuisine"
        ]
      },
      {
        "id": 7318007,
        "name": "Amphitheater",
        "childCategoryIds": [],
        "synonyms": [
          "Amphitheatre"
        ]
      },
      {
        "id": 9902002,
        "name": "Amusement Arcade",
        "childCategoryIds": [],
        "synonyms": [
          "Video Arcade",
          "Video Games",
          "Video Games Parlour"
        ]
      },
      {
        "id": 9902003,
        "name": "Amusement Park",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9902004,
        "name": "Amusement Place",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361048,
        "name": "Animal Services",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352045,
        "name": "Animal Shelter",
        "childCategoryIds": [],
        "synonyms": [
          "Animal Sanctuary",
          "Animal Rescue"
        ]
      },
      {
        "id": 9361049,
        "name": "Antique/Art Shop",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7304006,
        "name": "Apartment Rental",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9927004,
        "name": "Aquatic Zoo",
        "childCategoryIds": [],
        "synonyms": [
          "Aquarium"
        ]
      },
      {
        "id": 7315083,
        "name": "Arabian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Arab Food",
          "Arab Cuisine",
          "Arabian Food",
          "Arab Restaurant",
          "Arabian Cuisine"
        ]
      },
      {
        "id": 9927002,
        "name": "Arboreta & Botanical Gardens",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7376012,
        "name": "Arch",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315084,
        "name": "Argentinian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Argentinian Food",
          "Argentine Food",
          "Argentine Cuisine",
          "Argentinian Cuisine",
          "Argentine Restaurant"
        ]
      },
      {
        "id": 7315085,
        "name": "Armenian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Armenian Food",
          "Armenian Cuisine"
        ]
      },
      {
        "id": 7372012,
        "name": "Art School",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7339007,
        "name": "Ashram",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315062,
        "name": "Asian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Asian Cuisine",
          "Asian Food"
        ]
      },
      {
        "id": 7374002,
        "name": "Athletics Track",
        "childCategoryIds": [],
        "synonyms": [
          "Athletics Ground",
          "Running Track",
          "Athletic Stadium"
        ]
      },
      {
        "id": 9910009,
        "name": "ATV Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "ATV Sales",
          "All-Terrain Vehicle Sales",
          "All-Terrain Vehicle Dealer"
        ]
      },
      {
        "id": 7315086,
        "name": "Australian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Australian Cuisine",
          "Australian Food"
        ]
      },
      {
        "id": 7315004,
        "name": "Austrian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Austrian Cuisine",
          "Austrian Food"
        ]
      },
      {
        "id": 9352013,
        "name": "Automobile Company",
        "childCategoryIds": [],
        "synonyms": [
          "Car Distribution Center",
          "Motor Car Company",
          "Car Distribution Centre",
          "Car Company",
          "Automobile Factory"
        ]
      },
      {
        "id": 9352041,
        "name": "Automobile Manufacturing",
        "childCategoryIds": [],
        "synonyms": [
          "Automotive Manufacturer",
          "Automobile Manufacturer",
          "Motor Car Manufacturer",
          "Car Factory",
          "Car Manufacturer",
          "Automobile Factory"
        ]
      },
      {
        "id": 9361058,
        "name": "Bags & Leatherwear",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315146,
        "name": "Banquet Rooms",
        "childCategoryIds": [],
        "synonyms": [
          "Banquet Restaurant",
          "Function Hall",
          "Banquet Hall",
          "Function Room",
          "Banqueting Room"
        ]
      },
      {
        "id": 9379004,
        "name": "Bar",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315005,
        "name": "Barbecue Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "BBQ Restaurant",
          "Barbecue Cuisine",
          "Barbecue Food",
          "BBQ",
          "Barbecue"
        ]
      },
      {
        "id": 7374009,
        "name": "Baseball Park",
        "childCategoryIds": [],
        "synonyms": [
          "Baseball Field",
          "Baseball",
          "Ballpark",
          "Baseball Stadium",
          "Ball Park"
        ]
      },
      {
        "id": 7374012,
        "name": "Basketball Arena",
        "childCategoryIds": [],
        "synonyms": [
          "Basketball Court",
          "Basketball Stadium"
        ]
      },
      {
        "id": 7315087,
        "name": "Basque Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Basque Cuisine",
          "Basque Food"
        ]
      },
      {
        "id": 9362002,
        "name": "Battlefield",
        "childCategoryIds": [],
        "synonyms": [
          "Battleground"
        ]
      },
      {
        "id": 8099016,
        "name": "Bay",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9937002,
        "name": "Beach Club",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361067,
        "name": "Beauty Salon",
        "childCategoryIds": [],
        "synonyms": [
          "Beauty Shop",
          "Beauty Parlour",
          "Beauty Centre",
          "Beauty Center",
          "Beautician"
        ]
      },
      {
        "id": 9361050,
        "name": "Beauty Supplies",
        "childCategoryIds": [],
        "synonyms": [
          "Beauty Shop",
          "Beauty Store"
        ]
      },
      {
        "id": 7314002,
        "name": "B&B/Guest House",
        "childCategoryIds": [],
        "synonyms": [
          "Bed & Breakfast",
          "Guest House",
          "Guesthouse",
          "B&B",
          "Bed and Breakfast",
          "B & B",
          "B and B"
        ]
      },
      {
        "id": 7315006,
        "name": "Belgian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Belgian Cuisine",
          "Belgian Food"
        ]
      },
      {
        "id": 9361072,
        "name": "Betting Station",
        "childCategoryIds": [],
        "synonyms": [
          "Bookie",
          "Bookmaker"
        ]
      },
      {
        "id": 7315007,
        "name": "Bistro",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9663004,
        "name": "Blood Bank",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9910004,
        "name": "Boat Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Boat Sales"
        ]
      },
      {
        "id": 9362032,
        "name": "Boat Launching Ramp",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361083,
        "name": "Boating Equipment & Accessories",
        "childCategoryIds": [],
        "synonyms": [
          "Boating Accessories",
          "Boating Equipment"
        ]
      },
      {
        "id": 7310002,
        "name": "Bodyshop",
        "childCategoryIds": [],
        "synonyms": [
          "Car Body Shop",
          "Body Shop",
          "Car Bodyshop",
          "Panel Beater",
          "Panelbeaters"
        ]
      },
      {
        "id": 7315088,
        "name": "Bolivian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Bolivian Cuisine",
          "Bolivian Food"
        ]
      },
      {
        "id": 9361002,
        "name": "Book Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Book Store",
          "Book Seller"
        ]
      },
      {
        "id": 7315089,
        "name": "Bosnian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Bosnian Cuisine",
          "Bosnian Food"
        ]
      },
      {
        "id": 9378002,
        "name": "Bowling Center",
        "childCategoryIds": [],
        "synonyms": [
          "Bowling Centre",
          "Bowling Alley"
        ]
      },
      {
        "id": 7315072,
        "name": "Brazilian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Brazilian Food",
          "Brazilian Cuisine"
        ]
      },
      {
        "id": 7376010,
        "name": "Bridge",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352035,
        "name": "Bridge & Tunnel Operations",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315008,
        "name": "British Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "British Cuisine",
          "British Food"
        ]
      },
      {
        "id": 7315142,
        "name": "Buffet Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Buffet"
        ]
      },
      {
        "id": 7376002,
        "name": "Building",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315090,
        "name": "Bulgarian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Bulgarian Food",
          "Bulgarian Cuisine"
        ]
      },
      {
        "id": 7304004,
        "name": "Bungalow Rental",
        "childCategoryIds": [],
        "synonyms": [
          "Batch Rental",
          "Crib Rental"
        ]
      },
      {
        "id": 7315091,
        "name": "Burmese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Burmese Cuisine",
          "Burmese Food"
        ]
      },
      {
        "id": 9910008,
        "name": "Bus Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Coach Dealer",
          "Bus Sales"
        ]
      },
      {
        "id": 9352025,
        "name": "Bus Charter Company",
        "childCategoryIds": [],
        "synonyms": [
          "Bus Rental",
          "Bus Rental Company",
          "Bus Hire Company",
          "Bus Charter",
          "Bus Hire"
        ]
      },
      {
        "id": 9352027,
        "name": "Bus Lines",
        "childCategoryIds": [],
        "synonyms": [
          "Bus Route",
          "Local Buses",
          "Local Bus Services",
          "Bus Services"
        ]
      },
      {
        "id": 9942002,
        "name": "Bus Stop",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352039,
        "name": "Business Services",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7318006,
        "name": "Cabaret Theater",
        "childCategoryIds": [],
        "synonyms": [
          "Cabaret Theatre",
          "Cabaret"
        ]
      },
      {
        "id": 7314007,
        "name": "Cabins & Lodges",
        "childCategoryIds": [],
        "synonyms": [
          "Cabin",
          "Cabins",
          "Lodges",
          "Lodge",
          "Hut"
        ]
      },
      {
        "id": 9352040,
        "name": "Cable & Telephone Company",
        "childCategoryIds": [],
        "synonyms": [
          "Cable Company",
          "Telephone Company",
          "Telecoms Company",
          "Telecommunications Company"
        ]
      },
      {
        "id": 9376002,
        "name": "Café",
        "childCategoryIds": [],
        "synonyms": [
          "Cafe"
        ]
      },
      {
        "id": 7315147,
        "name": "Cafeteria",
        "childCategoryIds": [],
        "synonyms": [
          "Cafetaria"
        ]
      },
      {
        "id": 7315009,
        "name": "Californian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Californian Cuisine",
          "Californian Food"
        ]
      },
      {
        "id": 7315092,
        "name": "Cambodian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Cambodian Cuisine",
          "Cambodian Food"
        ]
      },
      {
        "id": 7315010,
        "name": "Canadian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Canadian Cuisine",
          "Canadian Food"
        ]
      },
      {
        "id": 8099020,
        "name": "Cape",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9910002,
        "name": "Car Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Car Dealership"
        ]
      },
      {
        "id": 7310003,
        "name": "Car Glass Replacement Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Auto Glass Repair",
          "Car Glass Repair",
          "Car Glass Replacement",
          "Windshield Repair",
          "Window Replacement",
          "Windscreen Repair",
          "Auto Glass Replacement"
        ]
      },
      {
        "id": 7360003,
        "name": "Caravan Site",
        "childCategoryIds": [],
        "synonyms": [
          "Caravan Park",
          "Mobile Park",
          "Camper Van",
          "RV Park",
          "Trailer Park",
          "Mobile Home Park"
        ]
      },
      {
        "id": 7315011,
        "name": "Caribbean Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Caribbean Cuisine",
          "Caribbean Food"
        ]
      },
      {
        "id": 9352043,
        "name": "Catering Services",
        "childCategoryIds": [],
        "synonyms": [
          "Catering",
          "Caterers"
        ]
      },
      {
        "id": 8099003,
        "name": "Cave",
        "childCategoryIds": [],
        "synonyms": [
          "Cavern"
        ]
      },
      {
        "id": 9361003,
        "name": "CDs, DVD & Videos",
        "childCategoryIds": [],
        "synonyms": [
          "CD Shop",
          "CD Store",
          "DVD Shop",
          "Video Store",
          "DVD Store",
          "Video Shop",
          "Video Centre"
        ]
      },
      {
        "id": 9361044,
        "name": "Video Rental Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Video & Game Rental",
          "Video Parlour",
          "Video and Game Rental",
          "Video Rental Store",
          "Video Store",
          "Video Rental"
        ]
      },
      {
        "id": 9362003,
        "name": "Cemetery",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7304005,
        "name": "Chalet Rental",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352014,
        "name": "Chemical Company",
        "childCategoryIds": [],
        "synonyms": [
          "Chemical Plant",
          "Chemical Supplier"
        ]
      },
      {
        "id": 7315070,
        "name": "Chicken Restaurant",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7372003,
        "name": "Child Care Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Day Nursery",
          "Daycare Center",
          "Day Care",
          "Daycare",
          "Play School",
          "Nursery School",
          "Crèche",
          "Nursery"
        ]
      },
      {
        "id": 7315093,
        "name": "Chilean Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Chilean Food",
          "Chilean Cuisine"
        ]
      },
      {
        "id": 7315012,
        "name": "Chinese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Chinese Food",
          "Chinese Cuisine"
        ]
      },
      {
        "id": 9361082,
        "name": "Christmas/Holiday Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Christmas/Holiday Store",
          "Holiday Shop",
          "Chrismas Store",
          "Vacation Store",
          "Christmas Store",
          "Christmas Shop",
          "Holiday Store",
          "Xmas Store",
          "Christmas/Vacation Store"
        ]
      },
      {
        "id": 7339002,
        "name": "Church",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352029,
        "name": "Cleaning Services",
        "childCategoryIds": [],
        "synonyms": [
          "Cleaners"
        ]
      },
      {
        "id": 9361004,
        "name": "Children's Clothes",
        "childCategoryIds": [],
        "synonyms": [
          "Kids' Clothes"
        ]
      },
      {
        "id": 9361005,
        "name": "Footwear & Shoe Repairs",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361006,
        "name": "Clothing Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Clothing hop",
          "Clothes Store",
          "Clothes",
          "Apparel Store",
          "Apparel",
          "Clothing Store",
          "Clothes Shop"
        ]
      },
      {
        "id": 9361007,
        "name": "Men's Clothing",
        "childCategoryIds": [],
        "synonyms": [
          "Menswear",
          "Men's Clothes"
        ]
      },
      {
        "id": 9361079,
        "name": "Specialty Clothing Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Specialty Clothing Store"
        ]
      },
      {
        "id": 9361008,
        "name": "Women's Clothing",
        "childCategoryIds": [],
        "synonyms": [
          "Womenswear",
          "Women's Clothes"
        ]
      },
      {
        "id": 9942005,
        "name": "Coach Stop",
        "childCategoryIds": [],
        "synonyms": [
          "Coach Terminus"
        ]
      },
      {
        "id": 9379006,
        "name": "Cocktail Bar",
        "childCategoryIds": [],
        "synonyms": [
          "Cocktail",
          "Cocktails"
        ]
      },
      {
        "id": 9376006,
        "name": "Coffee Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Coffee House",
          "Coffeeshop",
          "Coffeehouse"
        ]
      },
      {
        "id": 7377002,
        "name": "College/University",
        "childCategoryIds": [],
        "synonyms": [
          "University",
          "College",
          "Tertiary Education",
          "Uni"
        ]
      },
      {
        "id": 7315094,
        "name": "Colombian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Colombian Food",
          "Colombian Cuisine"
        ]
      },
      {
        "id": 9379009,
        "name": "Comedy Club",
        "childCategoryIds": [],
        "synonyms": [
          "Comedy Bar"
        ]
      },
      {
        "id": 9352004,
        "name": "Computer & Data Services",
        "childCategoryIds": [],
        "synonyms": [
          "Computer Services",
          "Data Services",
          "IT Services"
        ]
      },
      {
        "id": 9352005,
        "name": "Software Company",
        "childCategoryIds": [],
        "synonyms": [
          "Software Design",
          "Software Engineering"
        ]
      },
      {
        "id": 7318002,
        "name": "Concert Hall",
        "childCategoryIds": [],
        "synonyms": [
          "Music Hall"
        ]
      },
      {
        "id": 7303006,
        "name": "Condominium Complex",
        "childCategoryIds": [],
        "synonyms": [
          "Condominium",
          "Condo",
          "Condominium Block"
        ]
      },
      {
        "id": 9352032,
        "name": "Construction Company",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361042,
        "name": "Construction Material & Equipment",
        "childCategoryIds": [],
        "synonyms": [
          "Construction Material",
          "Construction Supplies",
          "Construction Equipment",
          "Building Supplies",
          "Builders Merchant"
        ]
      },
      {
        "id": 9361009,
        "name": "Convenience Store",
        "childCategoryIds": [],
        "synonyms": [
          "Dairy",
          "General Store",
          "Corner Store",
          "Corner Shop",
          "Superette"
        ]
      },
      {
        "id": 7315095,
        "name": "Corsican Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Corsican Cuisine",
          "Corsican Food"
        ]
      },
      {
        "id": 7304002,
        "name": "Cottage Rental",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 8099017,
        "name": "Cove",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315063,
        "name": "Creole Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Creole Cuisine",
          "Creole Food"
        ]
      },
      {
        "id": 7315013,
        "name": "Crêperie",
        "childCategoryIds": [],
        "synonyms": [
          "Pancake House"
        ]
      },
      {
        "id": 7374003,
        "name": "Cricket Ground",
        "childCategoryIds": [],
        "synonyms": [
          "Cricket Green",
          "Cricket Oval",
          "Cricket Field",
          "Cricket Pitch"
        ]
      },
      {
        "id": 7315096,
        "name": "Cuban Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Cuban Cuisine",
          "Cuban Food"
        ]
      },
      {
        "id": 7372015,
        "name": "Culinary School",
        "childCategoryIds": [],
        "synonyms": [
          "Hotel Management Institute",
          "Catering School"
        ]
      },
      {
        "id": 7315097,
        "name": "Cypriot Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Cypriot Cuisine",
          "Cypriot Food"
        ]
      },
      {
        "id": 7315068,
        "name": "Czech Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Czech Food",
          "Czech Cuisine"
        ]
      },
      {
        "id": 7376007,
        "name": "Dam",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9378003,
        "name": "Dance Studio & School",
        "childCategoryIds": [],
        "synonyms": [
          "Dance Academy",
          "Dance Studio",
          "Dance School"
        ]
      },
      {
        "id": 7315098,
        "name": "Danish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Danish Food",
          "Danish Cuisine"
        ]
      },
      {
        "id": 9361060,
        "name": "Delicatessen",
        "childCategoryIds": [],
        "synonyms": [
          "Delicacies",
          "Deli"
        ]
      },
      {
        "id": 7318008,
        "name": "Dinner Theater",
        "childCategoryIds": [],
        "synonyms": [
          "Dinner Theatre"
        ]
      },
      {
        "id": 9379002,
        "name": "Disco Club",
        "childCategoryIds": [],
        "synonyms": [
          "Disco",
          "Nightclub",
          "Club",
          "Dance Hall",
          "Discotheque"
        ]
      },
      {
        "id": 9352006,
        "name": "Diversified Financials",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315099,
        "name": "Dominican Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Dominican Cuisine",
          "Dominican Food"
        ]
      },
      {
        "id": 7315057,
        "name": "Dongbei Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Dongbei Cuisine",
          "Dongbei Food"
        ]
      },
      {
        "id": 7315079,
        "name": "Doughnut Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Doughnuts",
          "Donut Restaurant",
          "Donuts",
          "Doughnut Shop"
        ]
      },
      {
        "id": 9361076,
        "name": "Drive Through Bottle Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Drive Through Liquor Store"
        ]
      },
      {
        "id": 7342003,
        "name": "Drive-In Movies",
        "childCategoryIds": [],
        "synonyms": [
          "Drive-In Cinema",
          "Drive-In",
          "Drive-in Theatre",
          "Drive-In Theater"
        ]
      },
      {
        "id": 7372016,
        "name": "Driving School",
        "childCategoryIds": [],
        "synonyms": [
          "Driving Tuition",
          "Driving Academy",
          "Driver's Education",
          "Driver's Ed"
        ]
      },
      {
        "id": 9361051,
        "name": "Drug Store",
        "childCategoryIds": [],
        "synonyms": [
          "Chemist",
          "Drugstore"
        ]
      },
      {
        "id": 9361010,
        "name": "Dry Cleaner",
        "childCategoryIds": [],
        "synonyms": [
          "Dry Cleaning"
        ]
      },
      {
        "id": 8099005,
        "name": "Dune",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315014,
        "name": "Dutch Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Dutch Food",
          "Dutch Cuisine"
        ]
      },
      {
        "id": 7315100,
        "name": "Egyptian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Egyptian Cuisine",
          "Egyptian Food"
        ]
      },
      {
        "id": 9361052,
        "name": "Electrical Appliances Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Electrical Appliances Store"
        ]
      },
      {
        "id": 9361011,
        "name": "Cameras & Photography",
        "childCategoryIds": [],
        "synonyms": [
          "Camera Store",
          "Cameras",
          "Photography",
          "Photography Store"
        ]
      },
      {
        "id": 9361012,
        "name": "Computer & Computer Supplies",
        "childCategoryIds": [],
        "synonyms": [
          "Computer Store",
          "Computer Shop",
          "Computer",
          "Computer Supplies"
        ]
      },
      {
        "id": 9361013,
        "name": "Consumer Electronics",
        "childCategoryIds": [],
        "synonyms": [
          "Electronics",
          "Electronics Shop",
          "Electronics Store"
        ]
      },
      {
        "id": 9361014,
        "name": "Office Equipment",
        "childCategoryIds": [],
        "synonyms": [
          "Office Supplies",
          "Stationary Store"
        ]
      },
      {
        "id": 7315101,
        "name": "English Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "English Cuisine",
          "English Food"
        ]
      },
      {
        "id": 9352038,
        "name": "Equipment Rental",
        "childCategoryIds": [],
        "synonyms": [
          "Equipment Hire"
        ]
      },
      {
        "id": 7315132,
        "name": "Erotic Restaurant",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315102,
        "name": "Ethiopian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Ethiopian Cuisine",
          "Ethiopian Food"
        ]
      },
      {
        "id": 7315133,
        "name": "Exotic Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Exotic Food",
          "Exotic Cuisine"
        ]
      },
      {
        "id": 9361016,
        "name": "Factory Outlet",
        "childCategoryIds": [],
        "synonyms": [
          "Outlet Store",
          "Factory Store"
        ]
      },
      {
        "id": 9362017,
        "name": "Fairground",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7335004,
        "name": "Farm",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7332004,
        "name": "Farmers Market",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315015,
        "name": "Fast Food",
        "childCategoryIds": [],
        "synonyms": [
          "Fast Food Restaurant",
          "Fastfood Restaurant"
        ]
      },
      {
        "id": 7315016,
        "name": "Philippine Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Philippine Food",
          "Philippine Cuisine"
        ]
      },
      {
        "id": 7315104,
        "name": "Finnish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Finnish Food",
          "Finnish Cuisine"
        ]
      },
      {
        "id": 9362016,
        "name": "Fishing & Hunting Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7320002,
        "name": "Fitness Club & Center",
        "childCategoryIds": [],
        "synonyms": [
          "Fitness Center",
          "Fitness Centre",
          "Fitness Club",
          "Gym",
          "Gymnasium",
          "Fitness Club & Centre"
        ]
      },
      {
        "id": 7303003,
        "name": "Flats/Apartment Complex",
        "childCategoryIds": [],
        "synonyms": [
          "Apartment Complex",
          "Apartment Building",
          "Block of Flats",
          "Flats Complex",
          "Apartment Block"
        ]
      },
      {
        "id": 9361017,
        "name": "Florists",
        "childCategoryIds": [],
        "synonyms": [
          "Flower Shop",
          "Florist",
          "Flowers"
        ]
      },
      {
        "id": 9378004,
        "name": "Flying Club",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315134,
        "name": "Fondue Restaurant",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361018,
        "name": "Bakery",
        "childCategoryIds": [],
        "synonyms": [
          "Baker",
          "Baker's",
          "Bakers"
        ]
      },
      {
        "id": 9361019,
        "name": "Butcher",
        "childCategoryIds": [],
        "synonyms": [
          "Butchers Shop"
        ]
      },
      {
        "id": 9361020,
        "name": "Fishmonger",
        "childCategoryIds": [],
        "synonyms": [
          "Fish Market"
        ]
      },
      {
        "id": 9361021,
        "name": "Food Market",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361022,
        "name": "Greengrocer",
        "childCategoryIds": [],
        "synonyms": [
          "Vegetable Grocery Store",
          "Grocer"
        ]
      },
      {
        "id": 9361023,
        "name": "Grocery Store",
        "childCategoryIds": [],
        "synonyms": [
          "Groceries",
          "Grocery"
        ]
      },
      {
        "id": 9361024,
        "name": "Other Food Shops",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361025,
        "name": "Wine & Spirits",
        "childCategoryIds": [],
        "synonyms": [
          "Spirits",
          "Wholesale Liquor",
          "Liquor",
          "Liquor Outlet",
          "Liquor Store",
          "Off License",
          "Alcohol",
          "Bottle Store",
          "Off Licence"
        ]
      },
      {
        "id": 7374010,
        "name": "Football Stadium",
        "childCategoryIds": [],
        "synonyms": [
          "American Football Stadium",
          "Football Field",
          "Football Ground",
          "Football Arena"
        ]
      },
      {
        "id": 9362015,
        "name": "Forest Area",
        "childCategoryIds": [],
        "synonyms": [
          "Woods",
          "Forest"
        ]
      },
      {
        "id": 7315017,
        "name": "French Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "French Cuisine",
          "French Food"
        ]
      },
      {
        "id": 9352036,
        "name": "Funeral Service & Mortuaries",
        "childCategoryIds": [],
        "synonyms": [
          "Undertaker",
          "Mortuary",
          "Funeral Home",
          "Morgue",
          "Funeral Parlour",
          "Mortuaries",
          "Funeral Parlor",
          "Mortician",
          "Funeral Service"
        ]
      },
      {
        "id": 9361054,
        "name": "Furniture/Home Furnishings",
        "childCategoryIds": [],
        "synonyms": [
          "Furniture",
          "Furniture & Fittings",
          "Furnishings",
          "Furniture Showroom",
          "House Fittings",
          "Home Furnishings"
        ]
      },
      {
        "id": 7315071,
        "name": "Fusion Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Fusion Cuisine",
          "Fusion Food"
        ]
      },
      {
        "id": 7324002,
        "name": "Post Office",
        "childCategoryIds": [],
        "synonyms": [
          "Post",
          "Postal Service"
        ]
      },
      {
        "id": 7310004,
        "name": "Car Repair and Service",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9373002,
        "name": "General Practitioner",
        "childCategoryIds": [],
        "synonyms": [
          "Medical Practitioner",
          "MD",
          "GP",
          "Physician"
        ]
      },
      {
        "id": 7315018,
        "name": "German Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "German Food",
          "German Cuisine"
        ]
      },
      {
        "id": 9361026,
        "name": "Gifts, Cards, Novelties & Souvenirs",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361055,
        "name": "Glassware/Ceramic Shop",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9160003,
        "name": "Gold Exchange",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315019,
        "name": "Greek Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Greek Food",
          "Greek Cuisine"
        ]
      },
      {
        "id": 7315020,
        "name": "Grill Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Grill",
          "Tandoor Shop",
          "Grill Cuisine",
          "Grill Food"
        ]
      },
      {
        "id": 7315054,
        "name": "Guangdong Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Guangdong Cuisine",
          "Cantonese Cuisine",
          "Cantonese Restaurant",
          "Cantonese Food",
          "Guangdong Food"
        ]
      },
      {
        "id": 7339006,
        "name": "Gurudwara",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361027,
        "name": "Hairdresser",
        "childCategoryIds": [],
        "synonyms": [
          "Hair Styling",
          "Hair Saloon",
          "Hair Stylist"
        ]
      },
      {
        "id": 7315069,
        "name": "Hamburger Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Burger Joint",
          "Burgers",
          "Hamburgers"
        ]
      },
      {
        "id": 8099018,
        "name": "Harbor",
        "childCategoryIds": [],
        "synonyms": [
          "Haven",
          "Harbour"
        ]
      },
      {
        "id": 9361069,
        "name": "Hardware Store",
        "childCategoryIds": [],
        "synonyms": [
          "Hardware Supplies",
          "Hardware Shop"
        ]
      },
      {
        "id": 7315021,
        "name": "Hawaiian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Hawaiian Cuisine",
          "Hawaiian Food"
        ]
      },
      {
        "id": 7372006,
        "name": "High School",
        "childCategoryIds": [],
        "synonyms": [
          "Secondary School"
        ]
      },
      {
        "id": 7302004,
        "name": "Hiking Trail",
        "childCategoryIds": [],
        "synonyms": [
          "Hiking Path",
          "Walking Trail"
        ]
      },
      {
        "id": 8099025,
        "name": "Hill",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9362004,
        "name": "Historic Site",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9362005,
        "name": "Historical Park",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361053,
        "name": "Hobby Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Hobby Store",
          "Hobby/Free Time Shop",
          "Craft Shop",
          "Free Time Store",
          "Free Time Shop",
          "Craft Store"
        ]
      },
      {
        "id": 9937003,
        "name": "Hockey Club",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352044,
        "name": "Home Appliance Repair",
        "childCategoryIds": [],
        "synonyms": [
          "Domestic Appliance Repair",
          "Appliance Repair",
          "Electrical Appliance Repair"
        ]
      },
      {
        "id": 7374005,
        "name": "Horse Racing Track",
        "childCategoryIds": [],
        "synonyms": [
          "Race Course",
          "Horse Racing Stadium",
          "Race Track",
          "Horse Racing",
          "Horse Race Track"
        ]
      },
      {
        "id": 7320003,
        "name": "Horse Riding Center",
        "childCategoryIds": [],
        "synonyms": [
          "Horse Riding",
          "Equestrian Centre",
          "Horse Riding Centre",
          "Equestrian Center"
        ]
      },
      {
        "id": 7335002,
        "name": "Horticulture",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7321005,
        "name": "Hospital for Women and Children",
        "childCategoryIds": [],
        "synonyms": [
          "Women's & Children's Hospital"
        ]
      },
      {
        "id": 7321004,
        "name": "Hospital of Chinese Medicine",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7314004,
        "name": "Hostel",
        "childCategoryIds": [],
        "synonyms": [
          "Hostelry"
        ]
      },
      {
        "id": 7315058,
        "name": "Hot Pot Restaurant",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7314003,
        "name": "Hotel",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361028,
        "name": "Carpet/Floor Coverings",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361029,
        "name": "Curtains/Textiles",
        "childCategoryIds": [],
        "synonyms": [
          "Curtains/Textiles Shop"
        ]
      },
      {
        "id": 9361030,
        "name": "Do-It-Yourself Centers",
        "childCategoryIds": [],
        "synonyms": [
          "Do-It-Yourself Centres",
          "DIY",
          "DIY Store",
          "Do-It-Yourself"
        ]
      },
      {
        "id": 9361031,
        "name": "House & Garden: Furniture & Fittings",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361032,
        "name": "Garden Centers & Services",
        "childCategoryIds": [],
        "synonyms": [
          "Garden Centre",
          "Garden Center",
          "Garden Centres & Services",
          "Garden Centers",
          "Garden Services"
        ]
      },
      {
        "id": 9361080,
        "name": "Glass & Windows Store",
        "childCategoryIds": [],
        "synonyms": [
          "Glass Store",
          "Window Shop",
          "Window Store",
          "Glazier",
          "Glass Shop"
        ]
      },
      {
        "id": 9361033,
        "name": "Kitchens & Bathrooms",
        "childCategoryIds": [],
        "synonyms": [
          "Kitchens & Sanitory Store"
        ]
      },
      {
        "id": 9361034,
        "name": "Lighting Shops",
        "childCategoryIds": [],
        "synonyms": [
          "Lighting Stores",
          "Lighting Store",
          "Lights",
          "Light Shop",
          "Lamps",
          "Lighting"
        ]
      },
      {
        "id": 9361035,
        "name": "Painting & Decorating",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315052,
        "name": "Hunan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Hunan Food",
          "Hunan Cuisine",
          "Xiang Food",
          "Xiang Restaurant",
          "Xiang Cuisine"
        ]
      },
      {
        "id": 7315022,
        "name": "Hungarian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Hungarian Food",
          "Hungarian Cuisine"
        ]
      },
      {
        "id": 7315078,
        "name": "Ice Cream Parlor",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374008,
        "name": "Ice Hockey Arena",
        "childCategoryIds": [],
        "synonyms": [
          "Ice Rink",
          "Ice Hockey",
          "Ice Hockey Stadium"
        ]
      },
      {
        "id": 9352042,
        "name": "Import/Export and Distribution",
        "childCategoryIds": [],
        "synonyms": [
          "Import, Export and Distribution Company"
        ]
      },
      {
        "id": 7315023,
        "name": "Indian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Indian Food",
          "Indian Cuisine"
        ]
      },
      {
        "id": 7315024,
        "name": "Indonesian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Indonesian Cuisine",
          "Indonesian Food"
        ]
      },
      {
        "id": 7332002,
        "name": "Informal Market",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352007,
        "name": "Insurance Company",
        "childCategoryIds": [],
        "synonyms": [
          "Insurance Agent",
          "Insurance",
          "Insurance Broker",
          "Insurance Agency"
        ]
      },
      {
        "id": 7315073,
        "name": "International Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "International Cuisine",
          "International Food"
        ]
      },
      {
        "id": 7380002,
        "name": "International Railroad Station",
        "childCategoryIds": [],
        "synonyms": [
          "International Railway Station"
        ]
      },
      {
        "id": 9376004,
        "name": "Internet Café",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352037,
        "name": "Investment Advisor",
        "childCategoryIds": [],
        "synonyms": [
          "Financial Advisor"
        ]
      },
      {
        "id": 7315105,
        "name": "Iranian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Iranian Food",
          "Iranian Cuisine"
        ]
      },
      {
        "id": 7315065,
        "name": "Irish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Irish Food",
          "Irish Cuisine"
        ]
      },
      {
        "id": 8099022,
        "name": "Island",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315106,
        "name": "Israeli Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Israeli Food",
          "Israeli Cuisine"
        ]
      },
      {
        "id": 7315025,
        "name": "Italian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Italian Food",
          "Italian Cuisine"
        ]
      },
      {
        "id": 7315066,
        "name": "Jamaican Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Jamaican Food",
          "Jamaican Cuisine"
        ]
      },
      {
        "id": 7315026,
        "name": "Japanese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Japanese Cuisine",
          "Japanese Food"
        ]
      },
      {
        "id": 9379008,
        "name": "Jazz Club",
        "childCategoryIds": [],
        "synonyms": [
          "Jazz Bar"
        ]
      },
      {
        "id": 9361036,
        "name": "Jewelry, Clocks & Watches",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315027,
        "name": "Jewish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Jewish Food",
          "Jewish Cuisine"
        ]
      },
      {
        "id": 7377003,
        "name": "Junior College/Community College",
        "childCategoryIds": [],
        "synonyms": [
          "Sixth Form College",
          "Polytechnic",
          "TAFE College",
          "Polytech",
          "Technical and Further Education College"
        ]
      },
      {
        "id": 9379010,
        "name": "Karaoke Club",
        "childCategoryIds": [],
        "synonyms": [
          "Karaoke Bar",
          "Karaoke"
        ]
      },
      {
        "id": 7315028,
        "name": "Korean Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Korean Food",
          "Korean Cuisine"
        ]
      },
      {
        "id": 7315067,
        "name": "Kosher Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Kosher Cuisine",
          "Kosher Food"
        ]
      },
      {
        "id": 8099019,
        "name": "Lagoon",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9362006,
        "name": "Lakeshore",
        "childCategoryIds": [],
        "synonyms": [
          "Lakeside"
        ]
      },
      {
        "id": 7372010,
        "name": "Language School",
        "childCategoryIds": [],
        "synonyms": [
          "Language Academy"
        ]
      },
      {
        "id": 7315029,
        "name": "Latin American Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Latin American Cuisine",
          "Latin American Food"
        ]
      },
      {
        "id": 9361045,
        "name": "Laundry",
        "childCategoryIds": [],
        "synonyms": [
          "Laundry Store",
          "Launderette",
          "Laundromat",
          "Laundrette"
        ]
      },
      {
        "id": 7315030,
        "name": "Lebanese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Lebanese Cuisine",
          "Lebanese Food"
        ]
      },
      {
        "id": 9352023,
        "name": "Legal Services",
        "childCategoryIds": [],
        "synonyms": [
          "Law Office",
          "Law Service",
          "Law"
        ]
      },
      {
        "id": 7324003,
        "name": "Local Post Office",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361056,
        "name": "Local Specialities Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Local Specialties Shop"
        ]
      },
      {
        "id": 8099027,
        "name": "Locale",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361071,
        "name": "Lottery Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Lotto",
          "Lottery Store",
          "Lotto Store"
        ]
      },
      {
        "id": 7315107,
        "name": "Luxembourgian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Luxembourgian Cuisine",
          "Luxembourgian Food"
        ]
      },
      {
        "id": 7315135,
        "name": "Macrobiotic Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Macrobiotic Cuisine",
          "Macrobiotic Food"
        ]
      },
      {
        "id": 7315108,
        "name": "Maghrib Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Maghreb Food",
          "Maghrib Food",
          "Maghrib Cuisine",
          "Maghreb Restaurant",
          "Maghreb Cuisine"
        ]
      },
      {
        "id": 9352008,
        "name": "Delivery Service",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315031,
        "name": "Maltese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Maltese Food",
          "Maltese Cuisine"
        ]
      },
      {
        "id": 9352011,
        "name": "Manufacturing Company",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7347002,
        "name": "Marina",
        "childCategoryIds": [],
        "synonyms": [
          "Boat Basin"
        ]
      },
      {
        "id": 9361065,
        "name": "Marine Electronic Equipment",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 8099023,
        "name": "Marsh",
        "childCategoryIds": [],
        "synonyms": [
          "Wetlands",
          "Bog",
          "Swamp"
        ]
      },
      {
        "id": 7315109,
        "name": "Mauritian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Mauritian Cuisine",
          "Mauritian Food"
        ]
      },
      {
        "id": 7376011,
        "name": "Mausoleum/Grave",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352016,
        "name": "Mechanical Engineering",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361043,
        "name": "Medical Supplies & Equipment",
        "childCategoryIds": [],
        "synonyms": [
          "Medical Equipment",
          "Medical Distributor",
          "Medical Supplies"
        ]
      },
      {
        "id": 7315032,
        "name": "Mediterranean Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Mediterranean Cuisine",
          "Mediterranean Food"
        ]
      },
      {
        "id": 9362007,
        "name": "Memorial",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7380005,
        "name": "Subway Station",
        "childCategoryIds": [],
        "synonyms": [
          "Metro Station",
          "Tube",
          "Subway",
          "Underground",
          "Metro",
          "Underground Station"
        ]
      },
      {
        "id": 7315033,
        "name": "Mexican Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Mexican Cuisine",
          "Mexican Food"
        ]
      },
      {
        "id": 9376007,
        "name": "Microbrewery",
        "childCategoryIds": [],
        "synonyms": [
          "Independent Brewery"
        ]
      },
      {
        "id": 7315034,
        "name": "Middle Eastern Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Middle Eastern Cuisine",
          "Middle Eastern Food"
        ]
      },
      {
        "id": 7372014,
        "name": "Middle School",
        "childCategoryIds": [],
        "synonyms": [
          "Junior High",
          "Intermediate School"
        ]
      },
      {
        "id": 7383004,
        "name": "Military Airport",
        "childCategoryIds": [],
        "synonyms": [
          "Defence Airport",
          "Air Force Base"
        ]
      },
      {
        "id": 8099021,
        "name": "Mineral/Hot Springs",
        "childCategoryIds": [],
        "synonyms": [
          "Spring Bath"
        ]
      },
      {
        "id": 9352031,
        "name": "Mining Company",
        "childCategoryIds": [],
        "synonyms": [
          "Mining",
          "Mine"
        ]
      },
      {
        "id": 9361075,
        "name": "Mobile Phone Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Cell Phone Shop",
          "Smart Phones",
          "Cell Phones",
          "Cell Phone Store"
        ]
      },
      {
        "id": 7315110,
        "name": "Mongolian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Mongolian Cuisine",
          "Mongolian Food"
        ]
      },
      {
        "id": 7376003,
        "name": "Monument",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315074,
        "name": "Moroccan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Moroccan Food",
          "Moroccan Cuisine"
        ]
      },
      {
        "id": 7339003,
        "name": "Mosque",
        "childCategoryIds": [],
        "synonyms": [
          "Masjid"
        ]
      },
      {
        "id": 7314006,
        "name": "Motel",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374011,
        "name": "Motor Racing Stadium",
        "childCategoryIds": [],
        "synonyms": [
          "Motor Racing Track",
          "Motorsport",
          "Motor Racing Circuit",
          "Motor Racing",
          "Motor Sport",
          "Motorsport Circuit"
        ]
      },
      {
        "id": 9910003,
        "name": "Motorcycle Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Motor Cycle Dealer",
          "Scooter Dealer",
          "Bike Dealer",
          "Motorcycle Sales",
          "Motorbike Sales",
          "Motorbike Dealer"
        ]
      },
      {
        "id": 7310008,
        "name": "Motorcycle Repair",
        "childCategoryIds": [],
        "synonyms": [
          "Motorcycle Servicing",
          "Motorbike Repair",
          "Motorbike Servicing"
        ]
      },
      {
        "id": 7302002,
        "name": "Mountain Bike Trail",
        "childCategoryIds": [],
        "synonyms": [
          "Mountain Bike Path"
        ]
      },
      {
        "id": 8099002,
        "name": "Mountain Peak",
        "childCategoryIds": [],
        "synonyms": [
          "Mountain Summit",
          "Mountain Tip",
          "Mountain Crown",
          "Mountain Crest",
          "Mountain Top"
        ]
      },
      {
        "id": 9352033,
        "name": "Moving & Storage Company",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374006,
        "name": "Multi-Purpose Stadium",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7318003,
        "name": "Music Center",
        "childCategoryIds": [],
        "synonyms": [
          "Music Centre"
        ]
      },
      {
        "id": 9361059,
        "name": "Music Instruments Store",
        "childCategoryIds": [],
        "synonyms": [
          "Musical Instruments Shop",
          "Music Instruments Shop",
          "Musical Instruments Store"
        ]
      },
      {
        "id": 7315136,
        "name": "Mussels Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Mussels"
        ]
      },
      {
        "id": 9361068,
        "name": "Nail Salon",
        "childCategoryIds": [],
        "synonyms": [
          "Manicure",
          "Nail Bar",
          "Nails",
          "Pedicure"
        ]
      },
      {
        "id": 7380003,
        "name": "National Railroad Station",
        "childCategoryIds": [],
        "synonyms": [
          "National Railway Station"
        ]
      },
      {
        "id": 9362030,
        "name": "Natural Recreation Attraction",
        "childCategoryIds": [],
        "synonyms": [
          "Natural Attraction"
        ]
      },
      {
        "id": 7315111,
        "name": "Nepalese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Nepalese Food",
          "Nepalese Cuisine"
        ]
      },
      {
        "id": 7374014,
        "name": "Netball Stadium",
        "childCategoryIds": [],
        "synonyms": [
          "Netball Court",
          "Netball Ground",
          "Netball Arena"
        ]
      },
      {
        "id": 9361037,
        "name": "Newsagents & Tobacconists",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315112,
        "name": "Norwegian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Norwegian Food",
          "Norwegian Cuisine"
        ]
      },
      {
        "id": 8099011,
        "name": "Oasis",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7376005,
        "name": "Observatory",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352021,
        "name": "OEM",
        "childCategoryIds": [],
        "synonyms": [
          "Original Equipment Manufacturer"
        ]
      },
      {
        "id": 9352030,
        "name": "Oil & Natural Gas",
        "childCategoryIds": [],
        "synonyms": [
          "Oil Company",
          "Oil & Natural Gas Company"
        ]
      },
      {
        "id": 7318004,
        "name": "Opera House",
        "childCategoryIds": [],
        "synonyms": [
          "Opera"
        ]
      },
      {
        "id": 9361038,
        "name": "Optician",
        "childCategoryIds": [],
        "synonyms": [
          "Optometrist"
        ]
      },
      {
        "id": 7315075,
        "name": "Organic Food Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Organic Cuisine",
          "Organic Restaurant",
          "Organic Food"
        ]
      },
      {
        "id": 7315035,
        "name": "Oriental Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Oriental Cuisine",
          "Oriental Food"
        ]
      },
      {
        "id": 7310005,
        "name": "Other Repair Shops",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9362025,
        "name": "Other Winter Sport",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7339008,
        "name": "Pagoda",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315127,
        "name": "Pakistani Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Pakistani Food",
          "Pakistani Cuisine"
        ]
      },
      {
        "id": 8099009,
        "name": "Pan",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9362008,
        "name": "Park",
        "childCategoryIds": [],
        "synonyms": [
          "Parkland"
        ]
      },
      {
        "id": 9362009,
        "name": "Parkway",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9932002,
        "name": "Passenger Transport Ticket Office",
        "childCategoryIds": [],
        "synonyms": [
          "Ticket Office",
          "Ticket Counter"
        ]
      },
      {
        "id": 9361070,
        "name": "Pawn Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Pawnshop",
          "Pawnbroker"
        ]
      },
      {
        "id": 9932003,
        "name": "Pedestrian Subway",
        "childCategoryIds": [],
        "synonyms": [
          "Subway",
          "Underpass"
        ]
      },
      {
        "id": 9663003,
        "name": "Personal Care Facility",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9663002,
        "name": "Personal Service",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315061,
        "name": "Peruvian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Peruvian Cuisine",
          "Peruvian Food"
        ]
      },
      {
        "id": 9361064,
        "name": "Pet Supplies",
        "childCategoryIds": [],
        "synonyms": [
          "Pet Shop",
          "Pet Store"
        ]
      },
      {
        "id": 9352018,
        "name": "Pharmaceutical Company",
        "childCategoryIds": [],
        "synonyms": [
          "Drug Company"
        ]
      },
      {
        "id": 9361046,
        "name": "Photo Lab/Development",
        "childCategoryIds": [],
        "synonyms": [
          "Photo Studio",
          "Photo Developers",
          "Photo Developing",
          "Photo Development",
          "Photo Lab"
        ]
      },
      {
        "id": 9361047,
        "name": "Photocopy Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Xerox Shop",
          "Copiers",
          "Photocopying Shop",
          "Copy Shop",
          "Photocopying",
          "Photocopiers"
        ]
      },
      {
        "id": 9362033,
        "name": "Picnic Area",
        "childCategoryIds": [],
        "synonyms": [
          "Picnic Ground"
        ]
      },
      {
        "id": 7315036,
        "name": "Pizzeria",
        "childCategoryIds": [],
        "synonyms": [
          "Pizza",
          "Pizza Restaurant",
          "Pizzaria",
          "Pizza Shop",
          "Pizza Parlor"
        ]
      },
      {
        "id": 8099007,
        "name": "Plain/Flat",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7376006,
        "name": "Planetarium",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 8099008,
        "name": "Plateau",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315037,
        "name": "Polish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Polish Cuisine",
          "Polish Food"
        ]
      },
      {
        "id": 7315129,
        "name": "Polynesian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Polynesian Food",
          "Polynesian Cuisine"
        ]
      },
      {
        "id": 7315038,
        "name": "Portuguese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Portuguese Food",
          "Portuguese Cuisine"
        ]
      },
      {
        "id": 7372004,
        "name": "Pre School",
        "childCategoryIds": [],
        "synonyms": [
          "Pre-School",
          "Nursery School",
          "Preschool",
          "Kindergarten"
        ]
      },
      {
        "id": 9362010,
        "name": "Preserve",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7335003,
        "name": "Primary Producer",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7372005,
        "name": "Primary School",
        "childCategoryIds": [],
        "synonyms": [
          "Elementary School",
          "Junior School"
        ]
      },
      {
        "id": 7383003,
        "name": "Private Airport",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9379003,
        "name": "Private Club",
        "childCategoryIds": [],
        "synonyms": [
          "Members' Club"
        ]
      },
      {
        "id": 7315130,
        "name": "Provençal Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Provençal Food",
          "Provençal Cuisine"
        ]
      },
      {
        "id": 9376003,
        "name": "Pub",
        "childCategoryIds": [],
        "synonyms": [
          "Public House"
        ]
      },
      {
        "id": 7315039,
        "name": "Pub Food",
        "childCategoryIds": [],
        "synonyms": [
          "Bar Snacks",
          "Bar Food"
        ]
      },
      {
        "id": 7332003,
        "name": "Public Market",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7383002,
        "name": "Public Airport",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9932004,
        "name": "Public Call Box",
        "childCategoryIds": [],
        "synonyms": [
          "PCO",
          "Public Phone",
          "Payphone",
          "Phone Booth",
          "Telephone Box",
          "Phone Box",
          "Public Telephone Box",
          "Call Box"
        ]
      },
      {
        "id": 9352017,
        "name": "Public Health Technology Company",
        "childCategoryIds": [],
        "synonyms": [
          "Public Health Tech Company"
        ]
      },
      {
        "id": 9352019,
        "name": "Publishing Technologies",
        "childCategoryIds": [],
        "synonyms": [
          "Publishing House"
        ]
      },
      {
        "id": 8099026,
        "name": "Quarry",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374013,
        "name": "Race Track",
        "childCategoryIds": [],
        "synonyms": [
          "Racing Circuit",
          "Racing Track",
          "Racetrack",
          "Racecourse",
          "Raceway",
          "Racing"
        ]
      },
      {
        "id": 7380006,
        "name": "Railroad Siding",
        "childCategoryIds": [],
        "synonyms": [
          "Railway Siding"
        ]
      },
      {
        "id": 8099015,
        "name": "Rapids",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352009,
        "name": "Real Estate Company",
        "childCategoryIds": [],
        "synonyms": [
          "Real Estate",
          "Real Estate Agents",
          "Real Estate Broker",
          "Land Agent",
          "Real Estate Agent",
          "Real Estate Agency",
          "Commercial Property Agent",
          "Estate Agent"
        ]
      },
      {
        "id": 9361015,
        "name": "Real Estate Agent",
        "childCategoryIds": [],
        "synonyms": [
          "Land Agent",
          "Realtor",
          "Real Estate Broker",
          "Commercial Property Agent",
          "Estate Agent"
        ]
      },
      {
        "id": 9362011,
        "name": "Recreation Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7360002,
        "name": "Recreational Camping Ground",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9910005,
        "name": "Recreational Vehicle Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Motorhome Sales",
          "Recreational Vehicle Sales",
          "RV Dealer",
          "Camper Van Dealer",
          "RV Sales",
          "Caravan Dealer",
          "Motorhome Dealer"
        ]
      },
      {
        "id": 9361057,
        "name": "Recycling Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Thrift Store",
          "Second-hand Shop",
          "Charity Shop"
        ]
      },
      {
        "id": 8099014,
        "name": "Reef",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 8099013,
        "name": "Reservoir",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7303004,
        "name": "Residential Estate",
        "childCategoryIds": [],
        "synonyms": [
          "Residential Colony"
        ]
      },
      {
        "id": 7314005,
        "name": "Resort",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7314008,
        "name": "Rest Camp",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361063,
        "name": "Retail Outlet",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7303002,
        "name": "Retirement Community",
        "childCategoryIds": [],
        "synonyms": [
          "Retirement Home",
          "Nursing Home",
          "Retirement Village",
          "Old Age Home"
        ]
      },
      {
        "id": 8099004,
        "name": "Ridge",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 8099024,
        "name": "River Crossing",
        "childCategoryIds": [],
        "synonyms": [
          "Ford"
        ]
      },
      {
        "id": 9932006,
        "name": "Road Rescue",
        "childCategoryIds": [],
        "synonyms": [
          "AAA",
          "Tow Truck",
          "Roadside Assistance",
          "Breakdown Service",
          "Road Assistance",
          "Breakdown Assistance",
          "Breakdown Rescue",
          "Vehicle Assistance"
        ]
      },
      {
        "id": 7315041,
        "name": "Roadside Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Food Joint",
          "Road House",
          "Roadhouse",
          "Diner"
        ]
      },
      {
        "id": 7302006,
        "name": "Rock Climbing Trail",
        "childCategoryIds": [],
        "synonyms": [
          "Rock Climbing Route"
        ]
      },
      {
        "id": 8099012,
        "name": "Rocks",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374007,
        "name": "Rugby Ground",
        "childCategoryIds": [],
        "synonyms": [
          "Rugby Stadium",
          "Rugby Pitch"
        ]
      },
      {
        "id": 7315131,
        "name": "Romanian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Romanian Cuisine",
          "Rumanian Food",
          "Romanian Food",
          "Rumanian Cuisine"
        ]
      },
      {
        "id": 7315040,
        "name": "Russian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Russian Food",
          "Russian Cuisine"
        ]
      },
      {
        "id": 7315143,
        "name": "Salad Bar",
        "childCategoryIds": [],
        "synonyms": [
          "Salad"
        ]
      },
      {
        "id": 7310006,
        "name": "Car Accessories",
        "childCategoryIds": [],
        "synonyms": [
          "Vehicle Accessories"
        ]
      },
      {
        "id": 7315042,
        "name": "Sandwich Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Sandwich",
          "Sandwich Shop",
          "Subs",
          "Sandwiches",
          "Sub Shop",
          "Submarine Sandwich",
          "Sandwich Bar",
          "Sandwich Corner"
        ]
      },
      {
        "id": 9378005,
        "name": "Sauna, Solarium & Massage",
        "childCategoryIds": [],
        "synonyms": [
          "Spa",
          "Wellness"
        ]
      },
      {
        "id": 9352010,
        "name": "Savings Institution",
        "childCategoryIds": [],
        "synonyms": [
          "Savings Bank"
        ]
      },
      {
        "id": 7315113,
        "name": "Savoy Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Savoy Cuisine",
          "Savoy Food"
        ]
      },
      {
        "id": 7315114,
        "name": "Scandinavian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Scandinavian Food",
          "Scandinavian Cuisine"
        ]
      },
      {
        "id": 7372002,
        "name": "School",
        "childCategoryIds": [],
        "synonyms": [
          "Educational Institution"
        ]
      },
      {
        "id": 7315115,
        "name": "Scottish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Scottish Cuisine",
          "Scottish Food"
        ]
      },
      {
        "id": 7315043,
        "name": "Seafood",
        "childCategoryIds": [],
        "synonyms": [
          "Seafood Restaurant"
        ]
      },
      {
        "id": 9362013,
        "name": "Seashore",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7389004,
        "name": "Secured Entrance",
        "childCategoryIds": [],
        "synonyms": [
          "Security Gate"
        ]
      },
      {
        "id": 9361078,
        "name": "Security Products",
        "childCategoryIds": [],
        "synonyms": [
          "Security Solutions"
        ]
      },
      {
        "id": 7372007,
        "name": "Senior High School",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9352002,
        "name": "Service Company",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315053,
        "name": "Shandong Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Shandong Cuisine",
          "Lu Cuisine",
          "Shandong Food"
        ]
      },
      {
        "id": 7315055,
        "name": "Shanghai Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Shanghai Cuisine",
          "Hu Cuisine",
          "Shanghai Food"
        ]
      },
      {
        "id": 9361062,
        "name": "Shopping Service",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315056,
        "name": "Sichuan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Sichuan Food",
          "Szechuan Cuisine",
          "Szechuan Food",
          "Szechwan Cuisine",
          "Szechuan Restaurant",
          "Sichuan Cuisine"
        ]
      },
      {
        "id": 7315116,
        "name": "Sicilian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Sicilian Food",
          "Sicilian Cuisine"
        ]
      },
      {
        "id": 9362026,
        "name": "Ski Resort",
        "childCategoryIds": [],
        "synonyms": [
          "Ski Retreat"
        ]
      },
      {
        "id": 7315117,
        "name": "Slavic Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Slavic Food",
          "Slavic Cuisine"
        ]
      },
      {
        "id": 7315080,
        "name": "Slovak Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Slovak Food",
          "Slovak Cuisine"
        ]
      },
      {
        "id": 7315139,
        "name": "Snacks Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Snack Bar",
          "Snacks Centre"
        ]
      },
      {
        "id": 9378006,
        "name": "Snooker, Pool & Billiard",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7374004,
        "name": "Soccer Stadium",
        "childCategoryIds": [],
        "synonyms": [
          "Football Stadium",
          "Soccer Field",
          "Football Ground",
          "Soccer Arena"
        ]
      },
      {
        "id": 7315064,
        "name": "Soul Food",
        "childCategoryIds": [],
        "synonyms": [
          "Southern Food",
          "Southern Cuisine",
          "Southern Restaurant"
        ]
      },
      {
        "id": 7315140,
        "name": "Soup Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Soup"
        ]
      },
      {
        "id": 7315044,
        "name": "Spanish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Spanish Cuisine",
          "Spanish Food"
        ]
      },
      {
        "id": 7321003,
        "name": "Special Hospital",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7372013,
        "name": "Special School",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9373003,
        "name": "Specialist",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361061,
        "name": "Specialty Foods",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7372011,
        "name": "Sport School",
        "childCategoryIds": [],
        "synonyms": [
          "Sports Academy"
        ]
      },
      {
        "id": 9361039,
        "name": "Sports Equipment & Clothing",
        "childCategoryIds": [],
        "synonyms": [
          "Sports Clothing",
          "Sports Equipment"
        ]
      },
      {
        "id": 7320006,
        "name": "Squash Court",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361074,
        "name": "Stamp Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Stamps"
        ]
      },
      {
        "id": 7389003,
        "name": "Station Access",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7376013,
        "name": "Statue",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315045,
        "name": "Steak House",
        "childCategoryIds": [],
        "synonyms": [
          "Steakhouse",
          "Steak Restaurant"
        ]
      },
      {
        "id": 9160002,
        "name": "Stock Exchange",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315118,
        "name": "Sudanese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Sudanese Food",
          "Sudanese Cuisine"
        ]
      },
      {
        "id": 7332005,
        "name": "Supermarkets & Hypermarkets",
        "childCategoryIds": [],
        "synonyms": [
          "Hypermarkets",
          "Supermarket",
          "Supermarkets",
          "Hypermarket",
          "Superstore"
        ]
      },
      {
        "id": 7315046,
        "name": "Surinamese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Surinamese Food",
          "Surinamese Cuisine"
        ]
      },
      {
        "id": 7315148,
        "name": "Sushi Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Sushi Bar",
          "Sushi House"
        ]
      },
      {
        "id": 7315119,
        "name": "Swedish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Swedish Food",
          "Swedish Cuisine"
        ]
      },
      {
        "id": 7315047,
        "name": "Swiss Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Swiss Food",
          "Swiss Cuisine"
        ]
      },
      {
        "id": 7339004,
        "name": "Synagog",
        "childCategoryIds": [],
        "synonyms": [
          "Synagogue"
        ]
      },
      {
        "id": 7315120,
        "name": "Syrian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Syrian Food",
          "Syrian Cuisine"
        ]
      },
      {
        "id": 9361077,
        "name": "Tailor Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Tailor",
          "Tailors"
        ]
      },
      {
        "id": 7315059,
        "name": "Taiwanese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Taiwanese Cuisine",
          "Taiwanese Food"
        ]
      },
      {
        "id": 7315145,
        "name": "Takeout Food",
        "childCategoryIds": [],
        "synonyms": [
          "Take-out",
          "Take Out",
          "Takeaway Food",
          "Take Away Food",
          "Takeout",
          "Take Away",
          "Takeaway",
          "Carry-out",
          "To Go",
          "Takeout Restaurant"
        ]
      },
      {
        "id": 7315076,
        "name": "Tapas Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Tapas Bar",
          "Tapas"
        ]
      },
      {
        "id": 9352022,
        "name": "Tax Services",
        "childCategoryIds": [],
        "synonyms": [
          "Tax Broker",
          "Tax Accountant",
          "Tax Consultants",
          "Chartered Accountant",
          "Tax Agent"
        ]
      },
      {
        "id": 9942003,
        "name": "Taxi Stand",
        "childCategoryIds": [],
        "synonyms": [
          "Cab Rank",
          "Cab Stand",
          "Taxi Rank",
          "Taxi",
          "Cab"
        ]
      },
      {
        "id": 9352026,
        "name": "Taxi, Limousine & Shuttle Service",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9376005,
        "name": "Tea House",
        "childCategoryIds": [],
        "synonyms": [
          "Tea Room",
          "Tea Stall"
        ]
      },
      {
        "id": 7372009,
        "name": "Technical School",
        "childCategoryIds": [],
        "synonyms": [
          "Polytechnic School"
        ]
      },
      {
        "id": 9352020,
        "name": "Telecommunications",
        "childCategoryIds": [],
        "synonyms": [
          "Telecoms",
          "Telecom"
        ]
      },
      {
        "id": 7339005,
        "name": "Temple",
        "childCategoryIds": [],
        "synonyms": [
          "Mandir"
        ]
      },
      {
        "id": 7315121,
        "name": "Teppanyaki Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Teppanyaki Food",
          "Teppanyaki Cuisine"
        ]
      },
      {
        "id": 7315048,
        "name": "Thai Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Thai Food",
          "Thai Cuisine"
        ]
      },
      {
        "id": 7318005,
        "name": "Theater",
        "childCategoryIds": [],
        "synonyms": [
          "Theatre",
          "Play House",
          "Playhouse"
        ]
      },
      {
        "id": 7320005,
        "name": "Thematic Sport Center",
        "childCategoryIds": [],
        "synonyms": [
          "Thematic Sport Centre"
        ]
      },
      {
        "id": 7315122,
        "name": "Tibetan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Tibetan Cuisine",
          "Tibetan Food"
        ]
      },
      {
        "id": 9932005,
        "name": "Public Toilet",
        "childCategoryIds": [],
        "synonyms": [
          "Public Toilets",
          "Public W.C.",
          "Public Bathroom",
          "Public Rest Room",
          "Public Lavatories"
        ]
      },
      {
        "id": 7376009,
        "name": "Tower",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7303005,
        "name": "Townhouse Complex",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361040,
        "name": "Toys & Games Shop",
        "childCategoryIds": [],
        "synonyms": [
          "Games Shop",
          "Toy Shop",
          "Toy Store",
          "Gameshop",
          "Game Shop",
          "Games Shops",
          "Toy Stores"
        ]
      },
      {
        "id": 7301002,
        "name": "Traffic Control Department",
        "childCategoryIds": [],
        "synonyms": [
          "RTO",
          "Traffic Management Department"
        ]
      },
      {
        "id": 9942004,
        "name": "Streetcar Stop",
        "childCategoryIds": [],
        "synonyms": [
          "Streetcar",
          "Cable Car Stop",
          "Tram Stop"
        ]
      },
      {
        "id": 9352024,
        "name": "Transport Company",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9361041,
        "name": "Travel Agent",
        "childCategoryIds": [],
        "synonyms": [
          "Travel Agency",
          "Travel Bureau"
        ]
      },
      {
        "id": 9910006,
        "name": "Truck Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Truck Sales",
          "Commercial Vehicle Dealer",
          "Lorry Dealer"
        ]
      },
      {
        "id": 7310009,
        "name": "Truck Repair and Service",
        "childCategoryIds": [],
        "synonyms": [
          "Truck Repair",
          "Lorry Service",
          "Lorry Repair",
          "Truck Service"
        ]
      },
      {
        "id": 9155003,
        "name": "Truck Wash",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315123,
        "name": "Tunisian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Tunisian Food",
          "Tunisian Cuisine"
        ]
      },
      {
        "id": 7376008,
        "name": "Tunnel",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315049,
        "name": "Turkish Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Turkish Cuisine",
          "Turkish Food"
        ]
      },
      {
        "id": 7310007,
        "name": "Tire Service",
        "childCategoryIds": [],
        "synonyms": [
          "Tire Retail",
          "Tyre Shop",
          "Tyre Retail",
          "Tire Centre",
          "Tire Center",
          "Tyre Service",
          "Tyre Centre",
          "Tire Shop"
        ]
      },
      {
        "id": 7315124,
        "name": "Uruguayan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Uruguayan Cuisine",
          "Uruguayan Food"
        ]
      },
      {
        "id": 8099006,
        "name": "Valley",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9910007,
        "name": "Van Dealer",
        "childCategoryIds": [],
        "synonyms": [
          "Van Sales"
        ]
      },
      {
        "id": 9361081,
        "name": "Variety Store",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315050,
        "name": "Vegetarian Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Vegetarian Cuisine",
          "Vegetarian Food"
        ]
      },
      {
        "id": 7315125,
        "name": "Venezuelan Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Venezuelan Cuisine",
          "Venezuelan Food"
        ]
      },
      {
        "id": 7315051,
        "name": "Vietnamese Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Vietnamese Food",
          "Vietnamese Cuisine"
        ]
      },
      {
        "id": 7304003,
        "name": "Villa Rental",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7372008,
        "name": "Vocational School",
        "childCategoryIds": [],
        "synonyms": [
          "Vocational Training",
          "Vocational Education",
          "Trade School"
        ]
      },
      {
        "id": 7376014,
        "name": "Water Hole",
        "childCategoryIds": [],
        "synonyms": [
          "Watering Hole"
        ]
      },
      {
        "id": 9352046,
        "name": "Wedding Services",
        "childCategoryIds": [],
        "synonyms": [
          "Wedding Planning",
          "Wedding Planners"
        ]
      },
      {
        "id": 7359003,
        "name": "Weigh Scales",
        "childCategoryIds": [],
        "synonyms": [
          "Weigh Bridge",
          "HVSS",
          "Weigh Scale",
          "Heavy Vehicle Safety Stations",
          "Heavy Vehicle Safety Station"
        ]
      },
      {
        "id": 8099010,
        "name": "Well",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7315126,
        "name": "Welsh Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Welsh Cuisine",
          "Welsh Food"
        ]
      },
      {
        "id": 7315060,
        "name": "Western Restaurant",
        "childCategoryIds": [],
        "synonyms": [
          "Western Cuisine",
          "Western Food"
        ]
      },
      {
        "id": 9361066,
        "name": "Wholesale Club",
        "childCategoryIds": [],
        "synonyms": [
          "Wholesale Shop",
          "Warehouse Club"
        ]
      },
      {
        "id": 9362014,
        "name": "Wilderness Area",
        "childCategoryIds": [],
        "synonyms": [
          "SSSI"
        ]
      },
      {
        "id": 9927005,
        "name": "Wildlife Park",
        "childCategoryIds": [],
        "synonyms": [
          "Wildlife Conservation",
          "Wildlife",
          "Wildlife Refuge",
          "Wildlife Sanctuary"
        ]
      },
      {
        "id": 9379007,
        "name": "Wine Bar",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7347003,
        "name": "Yacht Basin",
        "childCategoryIds": [],
        "synonyms": [
          "Yacht Club"
        ]
      },
      {
        "id": 7315149,
        "name": "Yogurt/Juice Bar",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9927003,
        "name": "Zoo",
        "childCategoryIds": [],
        "synonyms": [
          "Zoological Garden"
        ]
      },
      {
        "id": 9352015,
        "name": "Electronics Company",
        "childCategoryIds": [],
        "synonyms": [
          "Electronics Supplier"
        ]
      },
      {
        "id": 9362036,
        "name": "River Scenic Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7302005,
        "name": "Horse Riding Trail",
        "childCategoryIds": [],
        "synonyms": [
          "Horse Riding Path"
        ]
      },
      {
        "id": 7321002,
        "name": "Hospital",
        "childCategoryIds": [],
        "synonyms": [
          "Clinic",
          "Hospital/Polyclinic",
          "Polyclinic"
        ]
      },
      {
        "id": 7376004,
        "name": "Natural Tourist Attraction",
        "childCategoryIds": [],
        "synonyms": [
          "Natural Attraction"
        ]
      },
      {
        "id": 7369002,
        "name": "Open Car Parking Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7369003,
        "name": "Open Coach Parking Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7369004,
        "name": "Open Truck Parking Area",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9364002,
        "name": "Medicinal Marijuana Dispensary",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9364003,
        "name": "Recreational Marijuana Dispensary",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9360,
        "name": "Ice Skating Rink",
        "childCategoryIds": [],
        "synonyms": [
          "Ice Rink",
          "Skating Rink",
          "Ice Skating"
        ]
      },
      {
        "id": 9369,
        "name": "Tennis Court",
        "childCategoryIds": [],
        "synonyms": [
          "Tennis"
        ]
      },
      {
        "id": 9911,
        "name": "Golf Course",
        "childCategoryIds": [],
        "synonyms": [
          "Golf Club",
          "Links",
          "Golf",
          "Links Course",
          "Golf Links"
        ]
      },
      {
        "id": 9371,
        "name": "Water Sport",
        "childCategoryIds": [],
        "synonyms": [
          "Water Sports"
        ]
      },
      {
        "id": 7338,
        "name": "Swimming Pool",
        "childCategoryIds": [],
        "synonyms": [
          "Baths",
          "Pool",
          "Swimming Baths",
          "Public Pool"
        ]
      },
      {
        "id": 9359,
        "name": "Restaurant Area",
        "childCategoryIds": [],
        "synonyms": [
          "Food Court",
          "Dining Area"
        ]
      },
      {
        "id": 9374,
        "name": "Dentist",
        "childCategoryIds": [],
        "synonyms": [
          "Tooth Doctor",
          "Teeth",
          "Denture Repair",
          "Dentist's Office",
          "Dental Surgery",
          "Dental Practitioner"
        ]
      },
      {
        "id": 9375,
        "name": "Veterinarian",
        "childCategoryIds": [],
        "synonyms": [
          "Animal Doctor",
          "Animal Hospital",
          "Vet Clinic",
          "Veterinary Clinic",
          "Animal Clinic",
          "Vet",
          "Veterinary Doctor",
          "Veterinary Surgeon"
        ]
      },
      {
        "id": 7326,
        "name": "Pharmacy",
        "childCategoryIds": [],
        "synonyms": [
          "Pharmacist"
        ]
      },
      {
        "id": 9956,
        "name": "EmergencyRoom",
        "childCategoryIds": [],
        "synonyms": [
          "Emergency Room"
        ]
      },
      {
        "id": 7327,
        "name": "Department Store",
        "childCategoryIds": [],
        "synonyms": [
          "General Store"
        ]
      },
      {
        "id": 7373,
        "name": "Shopping Center",
        "childCategoryIds": [],
        "synonyms": [
          "Precinct",
          "Shopping Arcade",
          "Shopping Mall",
          "Shopping Complex",
          "Shopping Precinct",
          "Shopping Centre",
          "Mall"
        ]
      },
      {
        "id": 7392,
        "name": "Fire Station",
        "childCategoryIds": [],
        "synonyms": [
          "Fire Station/Brigade",
          "Fire Brigade",
          "Fire Service",
          "Fire Hall",
          "Firemen",
          "Firehouse",
          "Fire Department"
        ]
      },
      {
        "id": 9152,
        "name": "Non Governmental Organization",
        "childCategoryIds": [],
        "synonyms": [
          "NGO",
          "Non-Governmental Organization",
          "Non Governmental Organisation"
        ]
      },
      {
        "id": 9154,
        "name": "Prison/Correctional Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Jail",
          "Prison",
          "Correctional Facility",
          "Correctional Department",
          "Remand Home"
        ]
      },
      {
        "id": 7365,
        "name": "Embassy",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9913,
        "name": "Library",
        "childCategoryIds": [],
        "synonyms": [
          "Public Library"
        ]
      },
      {
        "id": 9151,
        "name": "Transport Authority/Vehicle Registration Office",
        "childCategoryIds": [],
        "synonyms": [
          "Transport Authority",
          "DMV",
          "Transport Authority/Vehicle Registration",
          "Vehicle Registration",
          "RTO",
          "Vehicle Registration Office",
          "Ministry of Transport",
          "Department of Motor Vehicles",
          "MOT"
        ]
      },
      {
        "id": 9153,
        "name": "Welfare Organization",
        "childCategoryIds": [],
        "synonyms": [
          "Welfare Organisation",
          "Welfare",
          "Trust"
        ]
      },
      {
        "id": 9389,
        "name": "Native Reservation",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9363,
        "name": "Courthouse",
        "childCategoryIds": [],
        "synonyms": [
          "Lawcourt",
          "Law Courts",
          "Lawcourts",
          "Tribunal",
          "Magistrate Court",
          "Court of Law",
          "Judiciary",
          "Law Court",
          "Court House",
          "Courtroom"
        ]
      },
      {
        "id": 7322,
        "name": "Police Station",
        "childCategoryIds": [],
        "synonyms": [
          "Police",
          "Cops",
          "Police Department",
          "Station House"
        ]
      },
      {
        "id": 9150,
        "name": "Primary Resource/Utility",
        "childCategoryIds": [],
        "synonyms": [
          "Primary Utility",
          "Utility",
          "Primary Resources",
          "Utilities",
          "Primary Resource",
          "Primary Utilities"
        ]
      },
      {
        "id": 7367,
        "name": "Government Office",
        "childCategoryIds": [],
        "synonyms": [
          "Government Agency",
          "Government Building"
        ]
      },
      {
        "id": 9388,
        "name": "Military Installation",
        "childCategoryIds": [],
        "synonyms": [
          "Military Base",
          "Cantonment Area",
          "Barracks"
        ]
      },
      {
        "id": 9930,
        "name": "Rent-a-Car-Parking",
        "childCategoryIds": [],
        "synonyms": [
          "Rental Parking",
          "Hire Car Parking",
          "Rent-a-Car Parking",
          "Rental Car Parking",
          "Rental Parking Garage"
        ]
      },
      {
        "id": 7317,
        "name": "Museum",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 9383,
        "name": "Industrial Building",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7313,
        "name": "Parking Garage",
        "childCategoryIds": [],
        "synonyms": [
          "Indoor Parking",
          "Parking Ramp",
          "Secure Parking",
          "Parking Structure"
        ]
      },
      {
        "id": 7316,
        "name": "Tourist Information Office",
        "childCategoryIds": [],
        "synonyms": [
          "Information Centre",
          "Visitor Information Centre",
          "Tourist Center",
          "Tourist Information Center",
          "Information Office",
          "Visitor Centre",
          "Visitor Center",
          "Tourist Information Centre",
          "Tourist Centre",
          "I-site",
          "Tourist Office",
          "Tourist Information",
          "Visitor Information Center",
          "Information Center"
        ]
      },
      {
        "id": 9158,
        "name": "Media Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Broadcaster",
          "Media Center",
          "Media House",
          "Media Studio",
          "Media Centre",
          "Broadcasting House"
        ]
      },
      {
        "id": 7349,
        "name": "Winery",
        "childCategoryIds": [],
        "synonyms": [
          "Vintner",
          "Wine Estate",
          "Vineyard",
          "Wine Maker",
          "Winemaker",
          "Vinery"
        ]
      },
      {
        "id": 7391,
        "name": "Emergency Medical Service",
        "childCategoryIds": [],
        "synonyms": [
          "First Aid Post",
          "A & E",
          "Medical Service",
          "Ambulance Service",
          "First Aid",
          "First Aid Station",
          "Emergency Call Station",
          "Urgent Care",
          "A&E",
          "Emergency Department",
          "Accident & Emergency Unit",
          "Accident and Emergency"
        ]
      },
      {
        "id": 7341,
        "name": "Casino",
        "childCategoryIds": [],
        "synonyms": [
          "Gaming Parlour",
          "Betting",
          "Gambling"
        ]
      },
      {
        "id": 9156,
        "name": "Manufacturing Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Manufacturing Plant",
          "Production Plant",
          "Factory"
        ]
      },
      {
        "id": 9382,
        "name": "Commercial Building",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7319,
        "name": "Cultural Center",
        "childCategoryIds": [],
        "synonyms": [
          "Cultural Centre"
        ]
      },
      {
        "id": 9377,
        "name": "Exhibition & Convention Center",
        "childCategoryIds": [],
        "synonyms": [
          "Convention Center",
          "Convention Centre",
          "Exhibition Centre",
          "Conference Center",
          "Exhibition & Convention Centre",
          "Meeting Centre",
          "Meeting Center",
          "Exhibition Center",
          "Assembly Center",
          "Conference Hall"
        ]
      },
      {
        "id": 7312,
        "name": "Rent-a-Car Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Rent-a-Car",
          "Rent a Car",
          "U-Drive",
          "You-Drive",
          "Car Rental",
          "Car Hire",
          "Car Rental Services",
          "Car Rental Facility",
          "Self-Drive"
        ]
      },
      {
        "id": 7358,
        "name": "Truck Stop",
        "childCategoryIds": [],
        "synonyms": [
          "Transport Café",
          "Coach & Truck Parking",
          "Dhaba",
          "Truck Service",
          "Coach & Lorry Parking",
          "Coach and Lorry Parking",
          "Bus & Truck Park"
        ]
      },
      {
        "id": 7305,
        "name": "Adventure Sports Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Adventure Sports Venue",
          "Adventure Sports",
          "Outdoor Centre"
        ]
      },
      {
        "id": 7395,
        "name": "Rest Area",
        "childCategoryIds": [],
        "synonyms": [
          "Rest Stop",
          "Break Area",
          "Lay-by",
          "Service Area",
          "Layby",
          "Highway Services"
        ]
      },
      {
        "id": 9157,
        "name": "Research Facility",
        "childCategoryIds": [],
        "synonyms": [
          "Research Center",
          "Research Institute",
          "Research Centre"
        ]
      },
      {
        "id": 7388,
        "name": "Courier Drop Box",
        "childCategoryIds": [],
        "synonyms": [
          "Drop Box"
        ]
      },
      {
        "id": 7311,
        "name": "Gas Station",
        "childCategoryIds": [],
        "synonyms": [
          "Service Station",
          "Servo",
          "Petrol Pump",
          "Diesel Station",
          "Filling Station",
          "Fuel Stop",
          "Fuel Station",
          "Gasoline Station",
          "Petrol Station"
        ]
      },
      {
        "id": 7368,
        "name": "Motoring Organization Office",
        "childCategoryIds": [],
        "synonyms": [
          "Automobile Association",
          "AA",
          "Motoring Association"
        ]
      },
      {
        "id": 7397,
        "name": "ATM",
        "childCategoryIds": [],
        "synonyms": [
          "Automated Teller Machine",
          "Cash Machine",
          "ATM Machine",
          "Cashpoint",
          "Cash Point",
          "Automatic Teller Machine",
          "Automatic Teller",
          "Teller",
          "Bank Machine",
          "Cash Dispenser",
          "Money Machine"
        ]
      },
      {
        "id": 7363,
        "name": "Community Center",
        "childCategoryIds": [],
        "synonyms": [
          "Village Hall",
          "Community Centre"
        ]
      },
      {
        "id": 9357,
        "name": "Beach",
        "childCategoryIds": [],
        "synonyms": [
          "Sea",
          "Coast",
          "Strand",
          "Shore"
        ]
      },
      {
        "id": 9159,
        "name": "Port/Warehouse Facility",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7309,
        "name": "Electric Vehicle Charging Station",
        "childCategoryIds": [],
        "synonyms": [
          "Electric Vehicle Charge Point",
          "Electrical Vehicle Charging Station",
          "Electric Vehicle Station",
          "Charging Point",
          "Electric Charger",
          "EV Charger",
          "Charge Park",
          "EV station",
          "EV Charging Station",
          "Charging Spot",
          "Charging Park",
          "Electric Car Charging Station",
          "Charge Spot",
          "EV POI",
          "Electrical Vehicle Station",
          "Charge Station",
          "Charging Station",
          "Electric Car Charge Point"
        ]
      },
      {
        "id": 7337,
        "name": "Scenic/Panoramic View",
        "childCategoryIds": [],
        "synonyms": [
          "Scenic View",
          "Lookout",
          "Panoramic View",
          "Beauty Spot",
          "Panorama",
          "Vista",
          "Viewpoint",
          "Scenery"
        ]
      },
      {
        "id": 9900,
        "name": "Entertainment",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7378,
        "name": "Business Park",
        "childCategoryIds": [],
        "synonyms": [
          "Office Park",
          "Enterprise Zone",
          "Enterprise Park"
        ]
      },
      {
        "id": 7328,
        "name": "Bank",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7308,
        "name": "Helipad",
        "childCategoryIds": [],
        "synonyms": [
          "Heliport",
          "Helicopter Landing",
          "Helicopter",
          "Helicopter Landing Pad"
        ]
      },
      {
        "id": 9955,
        "name": "Checkpoint",
        "childCategoryIds": [],
        "synonyms": []
      },
      {
        "id": 7366,
        "name": "Frontier Crossing",
        "childCategoryIds": [],
        "synonyms": [
          "Border Line",
          "Border",
          "Integrated Check Post",
          "Frontier",
          "Border Crossing",
          "Customs Office",
          "Borderline",
          "Landing Custom Station",
          "Checkpost",
          "Border Security",
          "Border Control",
          "Customs"
        ]
      },
      {
        "id": 9935,
        "name": "Mountain Pass",
        "childCategoryIds": [],
        "synonyms": [
          "Mountain Road"
        ]
      },
      {
        "id": 7375,
        "name": "Toll Gate",
        "childCategoryIds": [],
        "synonyms": [
          "Toll Bar",
          "Toll Station",
          "Toll Plaza",
          "Toll Collection Gate",
          "Toll Booth"
        ]
      },
      {
        "id": 7352,
        "name": "Ferry Terminal",
        "childCategoryIds": [],
        "synonyms": [
          "Ferry Dock",
          "Ferries",
          "Ferry Wharf",
          "Ferry Station",
          "Ferry",
          "Ferry Crossing"
        ]
      }
    ]


    const poiImpCate = [
      {
        "name": "Hospital",
        "id": 7321
    },
    {
        "name": "Café/Pub",
        "id": 9376
    },
    {
        "name": "Health Care Service",
        "id": 9663
    },
    {
        "name": "Market",
        "id": 7332
    },
    {
        "name": "Public Amenity",
        "id": 9932
    },
    {
        "name": "College/University",
        "id": 7377
    },
    {
        "name": "Open Parking Area",
        "id": 7369
    },
    {
        "name": "School",
        "id": 7372
    },
    {
        "name": "Park & Recreation Area",
        "id": 9362
    },
    {
        "name": "Movie Theater",
        "id": 7342
    },
    {
        "name": "Place of Worship",
        "id": 7339
    },
    {
        "name": "Car Wash",
        "id": 9155
    },
    {
        "name": "Bank",
        "id": 7328
    },
    {
        "name": "Parking Garage",
        "id": 7313
    },
    {
        "name": "Police Station",
        "id": 7322
    },
    {
        "name": "Library",
        "id": 9913
    },
    {
        "name": "Shopping Center",
        "id": 7373
    },
    {
        "name": "Pharmacy",
        "id": 7326
    },
    {
        "name": "Swimming Pool",
        "id": 7338
    },
    {
        "name": "Golf Course",
        "id": 9911
    },
    {
        "name": "Fire Station",
        "id": 7392
    },
    {
        "name": "Taxi Stand",
        "id": 9942003
    },
    {
        "name": "Grocery Store",
        "id": 9361023
    },
    {
        "name": "Fast Food",
        "id": 7315015
    },
    {
        "name": "Dry Cleaner",
        "id": 9361010
    },
    {
        "name": "Convenience Store",
        "id": 9361009
    },
    {
        "name": "Banquet Rooms",
        "id": 7315146
    },
    ]
  ;

  const handleNameClick = (id, name) => {
    console.log(`Clicked on Parent ID: ${id}`);
    console.log({ name, id });
  };
    return (
        <div style={{padding:"20px"}}>
        <h2 style={{color:"black"}}>List of Point of Interest Names</h2>
        <div style={{display:'flex', flexWrap:"wrap", gap:"10px"}}>
            {poiImpCate.map((category) => (
            <div key={category.id}>
                 <button
                    onClick={() => handleNameClick(category.id, category.name)}
                    style={{
                        color: "white",
                        backgroundColor: backgroundColors[getRandomIndex()],
                    }}
                    >
                    {category.name}
                </button>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default PoiList;