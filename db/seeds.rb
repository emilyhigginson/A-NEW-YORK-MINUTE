

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "Seeding ... "

User.destroy_all
Spot.destroy_all 
Favorite.destroy_all

emily = User.create(username: "emhiggs" , password: "123", email: "emily@gmail.com", avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/81/rat_1f400.png")
lyn = User.create(username: "lynniebean" , password: "123", email: "lyn@gmail.com")
blair = User.create(username: "bliz" , password: "123", email: "blair@gmail.com")
george = User.create(username: "george" , password: "123", email: "george@gmail.com")
gar = User.create(username: "gmoney" , password: "123", email: "garrett@gmail.com")
brooke = User.create(username: "bmicc" , password: "123", email: "brooke@gmail.com")
danielle = User.create(username: "dani" , password: "123", email: "dani@gmail.com")

a = Spot.create(name: "Thursday Kitchen", image: "https://cdn.vox-cdn.com/thumbor/2sn-FrXl1sd5f1mDu4FnaWjNjWw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19683612/Mokyo_44.jpg", location: "East Village", category: "Food & Drink", free: false, lat: 40.72781795924672, lng: -73.98377283285949)
b = Spot.create(name: "Tompkins Square Bagels", image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-05/16/14/enhanced/webdr13/original-31784-1463422870-4.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", location: "East Village", category: "Food & Drink", free: false, lat: 40.7282791165415, lng: -73.98214172633915 )
c = Spot.create(name: "Street Taco", image: "https://d1ralsognjng37.cloudfront.net/97fd0995-a974-40a9-af8b-ecf2a0024bd8.jpeg", location: "Kips Bay", category: "Food & Drink", free: false, lat:40.741124272623104,lng: -73.98190124466342)
d=Spot.create(name: "Ruby's Cafe", image: "https://c0.wallpaperflare.com/preview/1018/396/976/ruby-s-cafe-soho-nyc-food.jpg", location: "Kips Bay", category: "Food & Drink", free: false,lat: 40.74387426452143, lng: -73.97977008513774)
e=Spot.create(name: "Bagel Schmear", image: "https://anotherfoodcritic.files.wordpress.com/2017/05/bagels-schmear-house-special.jpg", location: "Kips Bay", category: "Food & Drink ", free: false, lat: 40.74305173769354, lng: -73.98331141582719)
f= Spot.create(name: "Handcraft", image: "https://www.nyrestaurantsguide.com/wp-content/uploads/img/newamerican/handcraft/handcraft_kitchen_and_cocktails_new_york_food_1.jpg", location: "Kips Bay", category: "Food & Drink", free: false, lat: 40.740960, lng: -73.981260)
 g= Spot.create(name: "Union Square Farmer's Market", image: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/10/10131220/14712846912_8fa8556a3a_k.jpg", location: "Union Square", category: "Activity", free: true, lat: 40.736840, lng: -73.989723)
h=  Spot.create(name: "New York Public Library", image: "https://images.unsplash.com/photo-1576164285450-6d26c5b1a2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMHB1YmxpYyUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80", location: "Midtown", category: "Activity", free: true , lat: 40.753181, lng: -73.982231 )
i=Spot.create(name: "Oh K-Dog", image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/77501ebf-9859-45cc-a2e7-3dd8da8da7c6.jpg", location: "West Village", category: "Food & Drink", free: false, lat: 40.731990, lng:-74.003970 )
j=Spot.create(name: "Carbone", image: "https://media.theskinnypignyc.com/wp-content/uploads/2019/10/14215339/IMG_1664.jpg", location: "West Village", category: "Food & Drink", free: false, lat: 40.728134107538175, lng: -74.00019172151129)
k=Spot.create(name: "Slate NY", image: "https://media-cdn.tripadvisor.com/media/photo-s/03/0d/55/d9/slate-restaurant-bar.jpg", location: "Chelsea", category: "Late Night", free: false, lat: 40.74130489677701, lng: -73.9931532158272)
l=Spot.create(name: "Barcade", image: "https://barcade.com/wp-content/uploads/2021/02/Barcade_arcadegames_SB207573_533px.jpg", location: "East Village", category: "Late Night", free: false, lat: 40.74442824895874, lng: -73.99448388718874)
m=Spot.create(name: "Ace Bar", image: "https://img1.10bestmedia.com/Images/Photos/299071/p-217887325-1b7e5e8062-o_55_660x440.jpg", location: "East Village", category: "Late Night", free: false, lat: 40.72456689323934, lng: -73.98286521959255)
n=Spot.create(name: "PDT (Please Don't Tell", image: "https://media.timeout.com/images/100416809/750/422/image.jpg", location: "East Village", category: "Late Night", free: false, lat: 40.72721838512775, lng: -73.98373037369451)
o=Spot.create(name: "Temple Bar", image: "https://taste.b-cdn.net/wp-content/uploads/2016/05/The-temple-bar-NYC.jpg", location: "Nolita", category: "Late Night", free: false, lat: 40.7268204282378, lng: -73.99496923949792)
q= Spot.create(name: "Saint Tuesday", image: "https://untappedcities.com/wp-content/uploads/2021/11/Saint-Tuesday-Christopher-Covey-Walker-Hotel-Tribeca-Manhattan-NYC.jpg", location: "Tribeca", category: "Late Night", free: false, lat: 40.71832888328631, lng: -74.00197294658362)
r=Spot.create(name: "Scarr's Pizza", image: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2020/02/10104345/pizza2-1.jpg", location: "LES", category: "Food & Drink", free: false, lat: 40.71570291949074, lng: -73.99148510437566)
s=Spot.create(name: "Dan and John's Wings", image: "https://cdn.vox-cdn.com/thumbor/ZS4vKVSoqnq2Op94pAWsaerjPVY=/0x0:1178x884/1200x800/filters:focal(495x348:683x536)/cdn.vox-cdn.com/uploads/chorus_image/image/63060071/Screen_Shot_2019_02_15_at_12.15.38_PM.0.png", location: "East Village", category: "Food & Drink", free: false, lat: 40.72826177989524, lng: -73.98524611294224)
t=Spot.create(name: "Atla", image: "https://infatuation.imgix.net/media/images/reviews/atla/NoahDevereaux_Atla_080_Spread.JPG", location: "Noho", category: "Food & Drink", free: false, lat: 40.72737942452747, lng: -73.99396881959171)
u=Spot.create(name: "Semma", image: "https://blog.resy.com/wp-content/uploads/2021/10/semma-rundown-topper.jpg", location: "West Village", category: "Food & Drink", free: false, lat: 40.73614419220344, lng: -74.00060681786972)
v=Spot.create(name: "MoMA", image: "https://media.cntraveler.com/photos/5dae0325b45cd80008161cf3/master/pass/MOMA-2019_IVRPHOTO-4373_ArtistChoice_HB_007-2-2000x1125.jpg", location: "Flatiron", category: "Activity", free: false, lat: 40.761587080614085, lng: -73.97756795835313)
w=Spot.create(name: "The Met", image: "https://media.timeout.com/images/105813641/image.jpg", location: "Metropolitan Hill", category: "Activity", free: false, lat: 40.77991517845907, lng: -73.96321261552545)
x=Spot.create(name: "Broadway Theater", image: "https://dxan6czxprkid.cloudfront.net/theatre/broadway-theatre-featured-2048x1536.jpg", location: "Midtown", category: "Activity", free: false, lat: 40.763402710284396, lng: -73.98313871958173)
y=Spot.create(name: "Comedy Cellar", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/The_Comedy_Cellar_%2848072765427%29.jpg", location: "Greenwich Village", category: "Activity", free: false, lat: 40.73034652295398, lng: -74.00040297000312)
z=Spot.create(name: "Central Park", image: "https://i.pinimg.com/736x/4f/7b/b3/4f7bb3c9153708d9eeb9d0c7b2260710--central-park-in-new-york.jpg", location: "Central Park", category: "Actiity", free: true, lat: 40.781024903688156, lng: -73.96653563591482)
Spot.create(name: "West Side Highway", image: "https://theknickerbocker.com/wp-content/uploads/2017/05/Running-Routes-in-NYC.jpg", location: "West Village", category: "Activity", free: true, lat: 40.77573137108013, lng: -73.99154920437377)
Spot.create(name: "American Museum of Natural History", image: "https://news.fordham.edu/wp-content/uploads/2020/02/T-rex-group.jpg", location: "Upper West Side", category: "Activity", free: false, lat: 40.781405318882605,lng: -73.97399893136304)
Spot.create(name: "Empire State Building", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F13%2Fempire-state-building-view-ESBOPENING0720.jpg", location: "Midtown", category: "Activity", free: false, lat: 40.74855427096862, lng: -73.98570731786934)
Spot.create(name: "McSorley's Old Ale House", image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/McSorley%27s_Old_Ale_House_001_crop.jpg", location: "East Village", category: "Food & Drink", free: false, lat: 40.72896788674518, lng: -73.98967910252959)
Spot.create(name: "Strand Bookstore", image: "https://i.guim.co.uk/img/media/32bbd8b6eb761f47918e6aab09814f1cb84f8cec/0_190_5667_3400/master/5667.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b048a564ca0bb609297749abb9132c67", location: "East Village", category: "Activity", free: false, lat: 40.733581408936764,lng: -73.99066202747852)
Spot.create(name: "Tal Bagels", image: "https://www.foodnetwork.com/content/dam/images/food/video/0/01/019/0191/0191858.jpg", location: "Upper West Side", category: "Food & Drink", free: false, lat: 40.7930485677712, lng: -73.97485853259582)
Spot.create(name: "Washington Square Park", image: "https://nyc.streetsblog.org/wp-content/uploads/2021/07/WSP.jpg", location: "Greenwich Village", category: "Activity", free: true, lat: 40.73110322628771, lng: -73.99790924974396)
Spot.create(name: "Madison Square Park", image: "https://content.presspage.com/uploads/2716/1920_puryear_fw-663997.jpg?10000", location: "Flatiron", category: "Activity", free: true, lat: 40.74230308166563, lng: -73.98825952340648)
Spot.create(name: "Brooklyn Bridge", image: "https://tallgirlbigworld.com/wp-content/uploads/2018/07/27345222718_6cb381b19d_o-1.jpg", location: "Manhattan", category: "Activity", free: true, lat: 40.706216037567046, lng: -73.99686404584286)
Spot.create(name: "The High Line", image: "https://media.timeout.com/images/102540127/image.jpg", location: "Chelsea", category: "Activity", free: true, lat: 40.748000607367494, lng: -74.00471125835351)
Spot.create(name: "Madison Square Garden", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/14/16394607780028.jpg", location: "Midtown", category: "Activity", free: false, lat: 40.750618267436444, lng: -73.99334214301311)
Spot.create(name: "Spin New York", image: "https://wearespin.com/wp-content/uploads/SPIN-New-York-Venue-20170614103831.jpg", location: "Midtown", category: "Late Night", free: false, lat: 40.76156616649707, lng: -73.97461694586708)
Spot.create(name: "Tribeca Grill", image: "https://pyxis.nymag.com/v1/imgs/9e3/dea/b2eb7e11dc51a9782a84e4606ef2ab18dd-25-tribeca-grill-1.rsocial.w1200.jpg", location: "Tribeca", category: "Food & Drink", free: false, lat: 40.71979940914806, lng: -74.00971162951929)
Spot.create(name: "The Mmuseumm", image: "https://images.squarespace-cdn.com/content/v1/56e7191f7da24f4d24cb328a/1556374300778-BNQSZNPBW4QD252ZXS3A/mm19_inst_mm1_far.jpeg?format=1000w", location: "Tribeca", category: "Activity", free: false, lat: 40.71772676356314, lng: -74.00271290252994)
Spot.create(name: "Metrograph", image: "https://www.indiewire.com/wp-content/uploads/2016/03/metrograph.jpg", location: "LES", category: "Activity", free: false, lat: 40.71533001621131, lng: -73.99115743136504)
Spot.create(name: "Attaboy", image: "https://www.worldsbestbars.com/wp-content/uploads/2018/05/bar_640_480_Termini-2_54ad28c711db3.jpg", location: "LES", category: "Late Night", free: false, lat: 40.71914218979543, lng: -73.99145510437552)
Spot.create(name: "Rosie's", image: "https://www.nyrestaurantsguide.com/wp-content/uploads/img/mexican/rosies/rosies_new_york_2_food_1.jpg", location: "The Bowery", category: "Food & Drink", free: false, lat: 40.72508669622932, lng: -73.99058801602436)
Spot.create(name: "Bowery Poetry Club", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/BoweryPoetryClub.JPG", location: "The Bowery", category: "Activity", free: false, lat: 40.725139084256405, lng: -73.99261144473616)
Spot.create(name: "310 Bowery Bar", image: "https://s3-media0.fl.yelpcdn.com/bphoto/eq-6aX3eFLZchfDlk8K78A/l.jpg", location: "The Bowery", category: "Late Night", free: false, lat: 40.72513798865356, lng: -73.99264498903494 )
Spot.create(name: "Estela", image: "https://pyxis.nymag.com/v1/imgs/60d/524/2d3e45d556d030aecb338edb96c4ffc659-estela-03.rsocial.w1200.jpg", location: "Nolita", category: "Food & Drink", free: false, lat: 40.724755111686406, lng: -73.99470681602436)
Spot.create(name: "Elizabeth Street Garden", image: "https://assets3.thrillist.com/v1/image/2873184/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70", location: "Nolita", category: "Activity", free: true, lat: 40.72234297174394, lng: -73.99456748718946)
Spot.create(name: "Lombardi's", image: "https://cdn.vox-cdn.com/thumbor/ko7sP9lFPh7UY39HGhr4NmajDPA=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/63034090/43243357_UGco09hgACgaokkWsu3AiffxOud9d26KSFXJASzD7qg.0.jpg", location: "Soho", category: "Food & Drink", free: false, lat: 40.72174883564787, lng: -73.99567487369468 )
Spot.create(name: "SoHo Playhouse ", image: "https://images.squarespace-cdn.com/content/v1/5becc14389c172b77a9416a5/1545964422559-DITV562BU1FSD9KK3S4J/timthumb-1.jpg", location: "Soho", category: "Activity", free: false, lat: 40.726637111709394, lng: -74.00441723493232)
Spot.create(name: "Botanica Bar", image: "https://images.squarespace-cdn.com/content/v1/5b85666c96d455f621b4a2a7/1616530735095-GE54Z3IYHRDM4CYFJITO/AkdvuRqg.jpg?format=1000w", location: "Soho", category: "Late Night", free: false, lat: 40.72491710177181, lng: -73.99486516175172)
Spot.create(name: "Adoro Lei", image: "https://www.glutenfreefollowme.com/wp-content/uploads/2017/07/Adoro%20Lei_1.jpg", location: "Hudson Square", category: "Food & Drink", free: false, lat: 40.72559736883598, lng: -74.00777800170486)
Spot.create(name: "New York City Fire Museum", image: "https://i.ytimg.com/vi/CsePZMa92KU/maxresdefault.jpg", location: "Hudson Square", category: "Activity", free: false, lat: 40.72826422969871, lng: -74.00657260040971)
Spot.create(name: "Sound of Brazil", image: "https://images.squarespace-cdn.com/content/v1/53cc1616e4b0f4361f8ace24/1407957630168-VQPAF0MS0SZP28G9QPGT/image-asset.jpeg?format=1000w", location: "Hudson Square", category: "Late Night", free: false, lat: 40.72855080955221, lng: -74.0051348310709)

Spot.create(name: "Art Bar", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/35/fa/ec/art-loung-area.jpg?w=800&h=600&s=1", location: "West Village", category: "Late Night", free: false, lat: 40.73877015903881, lng: -74.0036903215609)
Spot.create(name: "Loring Place", image: "https://infatuation.imgix.net/media/images/reviews/loring-place/NoahDevereaux_LoringPlace_60_Spread.JPG", location: "Greenwich Village", category: "Food & Drink", free: false, lat: 40.73311466623701, lng: -73.99756224485925)
Spot.create(name: "Peculier Pub", image: "https://mrhipster.com/wp/wp-content/uploads/2000/02/peculier-pub.jpg", location: "Greenwich Village", category: "Late Night", free: false, lat: 40.72848334013993, lng: -73.99913807369452)
Spot.create(name: "Hole in the Wall", image: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/474240.jpg", location: "Flatiron", category: "Food & Drink", free: false, lat: 40.74490902089356, lng: -73.99127588967454)
Spot.create(name: "Undercote", image: "http://www.allny.com/blogs/todo/wp-content/uploads/2019/12/zuma-interior.jpg", location: "Flatiron", category: "Late Night", free: false, lat: 40.74118328645448, lng: -73.99107144473169)
Spot.create(name: "Fonda", image: "https://d1ralsognjng37.cloudfront.net/8de23a91-3278-478e-b463-16bfaf55bb18", location: "Chelsea", category: "Food & Drink", free: false, lat: 40.74968577762202, lng: -74.00086160132254)
Spot.create(name: "Empellon", image: "https://static01.nyt.com/images/2017/06/28/dining/28REST-EMPELLON-slide-BRIJ/28REST-EMPELLON-slide-BRIJ-jumbo.jpg", location: "Midtown", category: "Food & Drink", free: false, lat: 40.734816416567696, lng: -74.00352010623125)

Spot.create(name: "Taproom No.307", image: "https://www.ultimatehappyhours.com/wp-content/uploads/2020/04/Taproom-No-307-happy-hour-menu.png", location: "Kips Bay", category: "Late Night", free: false, lat: 40.73917510747771, lng: -73.98273820437484)
Spot.create(name: "e's BAR", image: "https://e-barnyc.com/wp-content/uploads/sb-instagram-feed-images/277694030_1039047330344350_817948595637265570_nfull.jpg", location: "Upper West Side", category: "Late Night", free: false, lat: 40.78685606024253, lng: -73.97544268689359)
Spot.create(name: "Dalmation and Taxi Sculpture", image: "https://pd-stuytown-cd.stuytown.com/-/media/ru-to-st/stos/spot-wide-667.jpg", location: "Kips Bay", category: "Activity", free: true, lat: 40.74342701391539, lng: -73.97277863308203)

# Spot.create(name: "", image: "", location: "", category: "Food & Drink", free: false)
# Spot.create(name: "", image: "", location: "", category: "Activity", free: false)

Favorite.create(user_id: emily.id, spot_id: Spot.first.id)
Favorite.create(user_id: emily.id, spot_id: Spot.third.id)
Favorite.create(user_id: emily.id, spot_id: Spot.fourth.id)
Favorite.create(user_id: emily.id, spot_id: Spot.fifth.id)
Favorite.create(user_id: emily.id, spot_id: Spot.last.id)

user_id = User.ids.sample
spot_id = Spot.ids.sample
    
Friend.create(friender_id: emily.id,friendee_id: blair.id)
Friend.create(friender_id: emily.id,friendee_id: lyn.id)
Friend.create(friender_id: emily.id,friendee_id: george.id)
Friend.create(friender_id: emily.id,friendee_id: gar.id)
   
Review.create(user_id: emily.id, spot_id: a.id , comment: "One of the best happy hours in the city! They don't take reservations but definitely worth the wait if you need to!")
Review.create(user_id: emily.id, spot_id:b.id , comment: "A classic for a reason. Best bagels in the East Village")
Review.create(user_id: blair.id, spot_id: c.id, comment: "My favorite place to grab dinner. Making it a goal to try every taco this place has to offer.")
Review.create(user_id: blair.id, spot_id: e.id , comment: "A Saturday morning essential. Always a line but always worth waiting.")
Review.create(user_id: blair.id, spot_id: d.id , comment: "I love this spot.")
Review.create(user_id: blair.id, spot_id: f.id, comment: "Best for brunch or a solid happy hour.")
Review.create(user_id: lyn.id, spot_id: g.id, comment: "Perfect thing to do on a nice weekend day. So many vendors and just a happy place.")
Review.create(user_id: emily.id, spot_id: h.id, comment: "Who doesn't love a good book? Even better when you're browsing through a place as beautiful as this.")
Review.create(user_id: brooke.id, spot_id: i.id, comment: "Tiktok made me do it. But it was worth it. ")
Review.create(user_id: lyn.id, spot_id: j.id, comment: "If you're going to break the bank, might as well do it here. Celeb spottings paired with perfect pasta >>>")
Review.create(user_id: emily.id, spot_id: k.id , comment: "A true adult playground. If you go here and don't go down the slide , what are you doing?")
Review.create(user_id: emily.id, spot_id: l.id, comment: "Such a good first date spot. So many games and just an all around fun atmosphere.")
Review.create(user_id: lyn.id, spot_id: m.id, comment: "Went here for the skee ball and I was not disappointed.")
Review.create(user_id: gar.id, spot_id: n.id , comment: "Felt like a true prohibitioner when getting into this place. Good vibes all around.")
Review.create(user_id: george.id, spot_id: o.id , comment: "A little piece of Ireland in the big apple. Love this spot.")



puts "finished seeding!! 🏙️ 🚕 🌭 "