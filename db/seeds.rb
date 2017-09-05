characters = [
  {
    name: "Jon Snow",
    photo_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg"
  },
  {
    name: "Daenerys",
    photo_url: "http://static3.businessinsider.com/image/58fa29eedd0895d84e8b4c8e-480/game-of-thrones-dany-season-7.jpg"
  },
  {
    name: "Tyrion",
    photo_url: "http://static1.businessinsider.com/image/592edbeada6dde130642828e-1440/tyrion%20lannister%20hbo%20promo%20game%20of%20thrones%20season%207.png"
  },
  {
    name: "Cersei Lannister",
    photo_url: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F28697c17-b266-4a46-a87c-2de0671d171b.jpg"
  },


  {
    name: "Sansa",
    photo_url: "http://static1.businessinsider.com/image/5773fa29dd08954c3c8b48e6-2147/sansa%20stark%20chin%20up.png"
  },
  {
    name: "Jaime Lannister",
    photo_url: "http://static3.businessinsider.com/image/575e2534dd0895ff718b4b07-2153/jaime%20lannister%20game%20of%20thrones.png"
  },

  {
    name: "Littlefinger",
    photo_url: "https://typeset-beta.imgix.net/2016/6/2/f0510580-b6b6-0131-d8f7-7eb00c19b1a9-ba44ca03-488e-4df6-8833-0f013b234f81.jpg"
  },
  {
    name: "Bronn",
    photo_url: "http://www.remotepatrolled.com/wp-content/uploads/2012/04/Bronn-game-of-thrones.png"
  },


  {
    name: "Bran",
    photo_url: "http://static5.uk.businessinsider.com/image/597f2e3185754f11f07fa56c-1125/bran%20stark%20three-eyed%20raven%20game%20of%20thrones%20season%20seven.png"
  },
  {
    name: "Davos",
    photo_url: "https://i.ytimg.com/vi/QpSMRzxaYcA/maxresdefault.jpg"
  },
  {
    name: "Renly Baratheon",
    photo_url: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/renly-baratheon-1920.jpg"
  },
  {
    name: "Cersei and Tyrion",
    photo_url: "https://patricksponaugle.files.wordpress.com/2016/04/tyrion-lannister-tv-series-peter-dinklage-cersei-440508.jpg"
  },
  {
    name: "Olenna Tyrell",
    photo_url: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/olenna-tyrell-1920.jpg"
  },
  {
    name: "Samwell",
    photo_url: "http://wikiofthrones.com/wp-content/uploads/2016/07/game-of-thrones.jpg"
  },
  {
    name: "Varys",
    photo_url: "https://www.quirkybyte.com/wp-content/uploads/2017/07/Lord-Varys.jpg"
  },
  {
    name: "The Hound",
    photo_url: "http://esquireuk.cdnds.net/15/37/1600x800/1600x800-the-hound-lives-43-jpg-4d2009b6.jpg"
  },
  {
    name: "Lord Rodrik",
    photo_url: "https://s-media-cache-ak0.pinimg.com/originals/22/56/be/2256be39be9b6548fa55beb507a26246.jpg"
  },
  {
    name: "Victarion Greyjoy",
    photo_url: "https://img02.deviantart.net/5a92/i/2016/077/0/4/victarion_greyjoy_by_gibilynx-d9vat52.jpg"
  },
  {
    name: "Alayne",
    photo_url: "http://images6.fanpop.com/image/photos/37000000/Game-of-Thrones-game-of-thrones-37045735-1280-800.jpg"
  },
  {
    name: "Brynden Tully",
    photo_url: "https://s-media-cache-ak0.pinimg.com/originals/d0/17/27/d0172711b395736643c39ca261c7d208.jpg"
  },

  {
    name: "Quaithe",
    photo_url: "https://i.ytimg.com/vi/-fZqh-qw_0M/maxresdefault.jpg"
  },

  {
    name: "The Discarded Knight",
    photo_url: "https://patricksponaugle.files.wordpress.com/2016/08/mountain.jpg"
  }
]
Profile.destroy_all;
Profile.create(characters);
