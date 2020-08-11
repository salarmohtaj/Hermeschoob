// add items to the "Add Items" tab
// loc shows in which tab the item should be inserted
// 0 is for general items, 1 is for kitchen items and 2 for home appliance
$(document).ready(function() {
  var items = [
   {
      //"name" : "Closed Door",
       "name" : "در بسته",
      //"image" : "{% static "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png" %}\",
       "image" : "../static/designpage/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "../static/designpage/models/js/closed-door28x80_baked.js",
      "type" : "7",
        "loc":"0"
    }, 
    {
      //"name" : "Open Door",
        "name" : "در باز",
      "image" : "../static/designpage/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "../static/designpage/models/js/open_door.js",
      "type" : "7",
        "loc":"0"
    }, 
    {
      //"name" : "Window",
        "name" : "پنجره",
      "image" : "../static/designpage/models/thumbnails/thumbnail_window.png",
      "model" : "../static/designpage/models/js/whitewindow.js",
      "type" : "3",
        "loc":"0"
    }, 
    {
      //"name" : "Chair",
        "name" : "صندلی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "../static/designpage/models/js/gus-churchchair-whiteoak.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Red Chair",
        "name" : "صندلی قرمز",
      "image" : "../static/designpage/models/thumbnails/thumbnail_tn-orange.png",
      "model" : "../static/designpage/models/js/ik-ekero-orange_baked.js",
      "type" : "1",
        "loc":"2"
    },
    {
      //"name" : "Blue Chair",
        "name" : "صندلی آبی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "../static/designpage/models/js/ik-ekero-blue_baked.js",
      "type" : "1",
        "loc":"2"
    },
    {
      //"name" : "Dresser - Dark Wood",
        "name" : "جاکفشی - رنگ تیره",
      "image" : "../static/designpage/models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "../static/designpage/models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Dresser - White",
        "name" : "جاکفشی - تیره",
      "image" : "../static/designpage/models/thumbnails/thumbnail_img25o.jpg",
      "model" : "../static/designpage/models/js/we-narrow6white_baked.js",
      "type" : "1",
        "loc":"2"
    },  
    {
      //"name" : "Bedside table - Shale",
        "name" : "میز کناری - طرح چوب",
      "image" : "../static/designpage/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "../static/designpage/models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Bedside table - White",
        "name" : "میز کناری - سفید",
      "image" : "../static/designpage/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "../static/designpage/models/js/cb-archnight-white_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Wardrobe - White",
        "name" : "کمد - سفید",
      "image" : "../static/designpage/models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "../static/designpage/models/js/ik-kivine_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Full Bed",
        "name" : "تختخواب",
      "image" : "../static/designpage/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "../static/designpage/models/js/ik_nordli_full.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Bookshelf",
        "name" : "قفسه کتاب",
      "image" : "../static/designpage/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "../static/designpage/models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
        {
      //"name" : "Media Console - White",
      "name" : "میز تلویزیون - سفید",
      "image" : "../static/designpage/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "../static/designpage/models/js/cb-clapboard_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
        {
      //"name" : "Media Console - Black",
       "name" : "میز تلویزیون - مشکی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "../static/designpage/models/js/cb-moore_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
       {
      //"name" : "Sectional - Olive",
           "name" : "مبل ال - زیتونی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_img21o.jpg",
      "model" : "../static/designpage/models/js/we-crosby2piece-greenbaked.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Sofa - Grey",
        "name" : "مبل راحتی - خاکستری",
      "image" : "../static/designpage/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "../static/designpage/models/js/cb-rochelle-gray_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
        {
      //"name" : "Wooden Trunk",
            "name" : "تنه چوبی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "../static/designpage/models/js/cb-tecs_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
        {
      //"name" : "Floor Lamp",
            "name" : "آباجور",
      "image" : "../static/designpage/models/thumbnails/thumbnail_ore-white.png",
      "model" : "../static/designpage/models/js/ore-3legged-white_baked.js",
      "type" : "1",
        "loc":"2"
    },
    {
      //"name" : "Coffee Table - Wood",
        "name" : "میز قهوه خوری - چوبی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "../static/designpage/models/js/ik-stockholmcoffee-brown.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Side Table",
        "name" : "میز کناری",
      "image" : "../static/designpage/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "../static/designpage/models/js/GUSossingtonendtable.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Dining Table",
        "name" : "میز غذاخوری",
      "image" : "../static/designpage/models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model" : "../static/designpage/models/js/cb-scholartable_baked.js",
      "type" : "1",
        "loc":"2"
    }, 
    {
      //"name" : "Dining table",
        "name" : "میز غذاخوری",
      "image" : "../static/designpage/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "../static/designpage/models/js/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1",
        "loc":"2"
    },
    {
      //"name" : "NYC Poster",
        "name" : "قاب عکس",
      "image" : "../static/designpage/models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "../static/designpage/models/js/nyc-poster2.js",
      "type" : "2",
        "loc":"2"
    },
    {
      //"name" : "Blue Rug",
        "name" : "فرش آبی",
      "image" : "../static/designpage/models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "../static/designpage/models/js/cb-blue-block-60x96.js",
      "type" : "8",
        "loc":"2"
    },
    {
      //"name" : "my armchair",
        "name" : "یخچال ساید بای ساید سفید",
      "image" : "../static/designpage/models/kitchen_thumbnails/sbs_refreg_white.jpeg",
      "model" : "../static/designpage/models/kitchen_js/sbs_refreg_white.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "یخچال و فریزر",
      "image" : "../static/designpage/models/kitchen_thumbnails/refreg_white.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenfridge.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "هود طرح جدید - مشکی",
      "image" : "../static/designpage/models/kitchen_thumbnails/hoodmodern_black.jpeg",
      "model" : "../static/designpage/models/kitchen_js/hoodmodern_black.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "هود بزرگ - مشکی",
      "image" : "../static/designpage/models/kitchen_thumbnails/hoodlarge_black.jpg",
      "model" : "../static/designpage/models/kitchen_js/hoodlarge_black.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "گاز و فر",
      "image" : "../static/designpage/models/kitchen_thumbnails/gasstove.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenstove.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "گاز و فر برقی",
      "image" : "../static/designpage/models/kitchen_thumbnails/elecstove.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenstoveelectronic.js",
      "type" : "9",
        "loc":"1"
    },

    {
      //"name" : "my armchair",
        "name" : "کابینت زمینی - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchencabinet_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchencabinet_brown.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت هوایی - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenupper_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenupper_brown.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت هوایی گوشه - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenuppercorner_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenuppercorner_brown.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت هوایی ۲ در - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenupper2door_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenupper2door_brown.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت هوایی کوچک - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenuppersmall_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenuppersmall_brown.js",
      "type" : "2",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت زمینی گوشه (گرد) - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchencabinet_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenfloorround_brown.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت زمینی گوشه (تیز) - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenfloorsharp_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenfloorsharp_brown.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت زمینی دراوری - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchencabinetdrawer_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchencabinetdrawer_brown.js",
      "type" : "9",
        "loc":"1"
    },
    {
      //"name" : "my armchair",
        "name" : "کابینت سینک - قهوه ای",
      "image" : "../static/designpage/models/kitchen_thumbnails/sink.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchensink_brown.js",
      "type" : "9",
        "loc":"1"
    },
   // {
      //"name" : "my armchair",
    //    "name" : "یخچال و فریزر توکار",
  //   "image" : "../static/designpage/models/kitchen_thumbnails/kitchencabinet_brown.jpg",
   //   "model" : "../static/designpage/models/kitchen_js/kitchenfridgebuiltin.js",
   //   "type" : "9",
   //     "loc":"1"
 //   },
 //   },
    {
      //"name" : "my armchair",
        "name" : "کابینت جزیره",
      "image" : "../static/designpage/models/kitchen_thumbnails/kitchenbar_brown.jpg",
      "model" : "../static/designpage/models/kitchen_js/kitchenbar_brown.js",
      "type" : "1",
        "loc":"1"
    }//,
   // {
      //"name" : "my armchair",
    //    "name" : "ستون انتهای بار",
     // "image" : "../static/designpage/models/kitchen_thumbnails/kitchenbar_brown.jpg",
    //  "model" : "../static/designpage/models/kitchen_js/kitchenbarend_brown.js",
    //  "type" : "1",
    //    "loc":"1"
   // }
    //,
//    {
//      //"name" : "my armchair",
//        "name" : "همزن",
//      "image" : "../static/designpage/models/kitchen_thumbnails/kitchencabinet_brown.jpg",
//      "model" : "../static/designpage/models/kitchen_js/kitchenblender.js",
//      "type" : "1"
//    }
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ]


  var kitchentab1 = $("#kitchentab")
  var homeappliancetab1 = $("#homeappliancetab")
  var generaltoolstab1 = $("#generaltoolstab")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img style="height: 150px" src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    if (item.loc  == '1') {
    kitchentab1.append(html);
  }
    else if (item.loc  == '0'){
    generaltoolstab1.append(html);
    }
    else if (item.loc  == '2'){
    homeappliancetab1.append(html);
    }
      }
});
