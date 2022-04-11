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

emily = User.create(username: "emhiggs" , password: "123", email: "emily@gmail.com")

Spot.create(name: "Thursday Kitchen", image: "https://cdn.vox-cdn.com/thumbor/2sn-FrXl1sd5f1mDu4FnaWjNjWw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19683612/Mokyo_44.jpg", location: "East Village", category: "Food & Drink", free: false, lat: 40.72781795924672, lng: -73.98377283285949)
Spot.create(name: "Tompkins Square Bagels", image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-05/16/14/enhanced/webdr13/original-31784-1463422870-4.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", location: "East Village", category: "Food & Drink", free: false, lat: 40.7282791165415, lng: -73.98214172633915 )
Spot.create(name: "Street Taco", image: "https://d1ralsognjng37.cloudfront.net/97fd0995-a974-40a9-af8b-ecf2a0024bd8.jpeg", location: "Kips Bay", category: "Food & Drink", free: false, lat:40.741124272623104,lng: -73.98190124466342)
Spot.create(name: "Ruby's Cafe", image: "https://c0.wallpaperflare.com/preview/1018/396/976/ruby-s-cafe-soho-nyc-food.jpg", location: "Kips Bay", category: "Food & Drink", free: false,lat: 40.74387426452143, lng: -73.97977008513774)
Spot.create(name: "Bagel Schmear", image: "https://anotherfoodcritic.files.wordpress.com/2017/05/bagels-schmear-house-special.jpg", location: "Kips Bay", category: "Food & Drink ", free: false, lat: 40.74305173769354, lng: -73.98331141582719)
Spot.create(name: "Handcraft", image: "https://www.nyrestaurantsguide.com/wp-content/uploads/img/newamerican/handcraft/handcraft_kitchen_and_cocktails_new_york_food_1.jpg", location: "Kips Bay", category: "Food & Drink", free: false, lat: 40.740960, lng: -73.981260)
Spot.create(name: "Union Square Farmer's Market", image: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/10/10131220/14712846912_8fa8556a3a_k.jpg", location: "Union Square", category: "Activity", free: true, lat: 40.736840, lng: -73.989723)
Spot.create(name: "New York Public Library", image: "https://images.unsplash.com/photo-1576164285450-6d26c5b1a2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMHB1YmxpYyUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80", location: "Midtown", category: "Activity", free: true , lat: 40.753181, lng: -73.982231 )
Spot.create(name: "Oh K-Dog", image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/77501ebf-9859-45cc-a2e7-3dd8da8da7c6.jpg", location: "West Village", category: "Food & Drink", free: false, lat: 40.731990, lng:-74.003970 )
Spot.create(name: "Carbone", image: "https://media.theskinnypignyc.com/wp-content/uploads/2019/10/14215339/IMG_1664.jpg", location: "West Village", category: "Food & Drink", free: false, lat: 40.728134107538175, lng: -74.00019172151129)
Spot.create(name: "Slate NY", image: "https://media-cdn.tripadvisor.com/media/photo-s/03/0d/55/d9/slate-restaurant-bar.jpg", location: "Chelsea", category: "Late Night", free: false, lat: 40.74130489677701, lng: -73.9931532158272)
Spot.create(name: "Barcade", image: "https://barcade.com/wp-content/uploads/2021/02/Barcade_arcadegames_SB207573_533px.jpg", location: "East Village", category: "Late Night", free: false)
Spot.create(name: "Ace Bar", image: "https://img1.10bestmedia.com/Images/Photos/299071/p-217887325-1b7e5e8062-o_55_660x440.jpg", location: "East Village", category: "Late Night", free: false)
Spot.create(name: "PDT (Please Don't Tell", image: "https://media.timeout.com/images/100416809/750/422/image.jpg", location: "East Village", category: "Late Night", free: false)
Spot.create(name: "Temple Bar", image: "https://taste.b-cdn.net/wp-content/uploads/2016/05/The-temple-bar-NYC.jpg", location: "Nolita", category: "Late Night", free: false)
Spot.create(name: "Saint Tuesday", image: "https://untappedcities.com/wp-content/uploads/2021/11/Saint-Tuesday-Christopher-Covey-Walker-Hotel-Tribeca-Manhattan-NYC.jpg", location: "Tribeca", category: "Late Night", free: false)
Spot.create(name: "Scarr's Pizza", image: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2020/02/10104345/pizza2-1.jpg", location: "Lower East Side", category: "Food & Drink", free: false)
Spot.create(name: "Dan and John's Wings", image: "https://cdn.vox-cdn.com/thumbor/ZS4vKVSoqnq2Op94pAWsaerjPVY=/0x0:1178x884/1200x800/filters:focal(495x348:683x536)/cdn.vox-cdn.com/uploads/chorus_image/image/63060071/Screen_Shot_2019_02_15_at_12.15.38_PM.0.png", location: "East Village", category: "Food & Drink", free: false)
Spot.create(name: "Atla", image: "https://infatuation.imgix.net/media/images/reviews/atla/NoahDevereaux_Atla_080_Spread.JPG", location: "Noho", category: "Food & Drink", free: false)
Spot.create(name: "Semma", image: "https://blog.resy.com/wp-content/uploads/2021/10/semma-rundown-topper.jpg", location: "West Village", category: "Food & Drink", free: false)
Spot.create(name: "MoMA", image: "https://media.cntraveler.com/photos/5dae0325b45cd80008161cf3/master/pass/MOMA-2019_IVRPHOTO-4373_ArtistChoice_HB_007-2-2000x1125.jpg", location: "", category: "Activity", free: false)
Spot.create(name: "The Met", image: "https://media.timeout.com/images/105813641/image.jpg", location: "", category: "Activity", free: false)
Spot.create(name: "Broadway Theater", image: "https://dxan6czxprkid.cloudfront.net/theatre/broadway-theatre-featured-2048x1536.jpg", location: "", category: "Activity", free: false)
Spot.create(name: "Comedy Cellar", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/The_Comedy_Cellar_%2848072765427%29.jpg", location: "", category: "Activity", free: false)
Spot.create(name: "Central Park", image: "https://i.pinimg.com/736x/4f/7b/b3/4f7bb3c9153708d9eeb9d0c7b2260710--central-park-in-new-york.jpg", location: "", category: "Actiity", free: true)
Spot.create(name: "West Side Highway", image: "https://theknickerbocker.com/wp-content/uploads/2017/05/Running-Routes-in-NYC.jpg", location: "", category: "Activity", free: true)
Spot.create(name: "American Museum of Natural History", image: "", location: "Upper West Side", category: "Activity", free: false)
Spot.create(name: "Empire State Building", image: "", location: "Midtown West", category: "Activity", free: false)
Spot.create(name: "McSorley's Old Ale House", image: "", location: "East Village", category: "Food & Drink", free: false)
Spot.create(name: "Strand Book Store", image: "", location: "East Village", category: "Activity", free: false)
Spot.create(name: "Tal Bagels", image: "", location: "Upper West Side", category: "Food & Drink", free: false)
Spot.create(name: "Washington Square Park", image: "", location: "Greenwich Village", category: "Activity", free: true)
Spot.create(name: "Madison Square Park", image: "", location: "Flatiron", category: "Activity", free: true)
Spot.create(name: "Brooklyn Bridge", image: "", location: "Manhattan", category: "Activity", free: true)
Spot.create(name: "The High Line", image: "", location: "Chelsea", category: "Activity", free: true)
Spot.create(name: "", image: "", location: "", category: "Food & Drink", free: false)

Favorite.create(user_id: User.first.id, spot_id: Spot.first.id)
Favorite.create(user_id: User.last.id, spot_id: Spot.last.id)

20.times do
    user_id = User.ids.sample
    spot_id = Spot.ids.sample
    
    10.times do 
      Review.create(user_id: user_id, spot_id: spot_id, comment: Faker::Restaurant.review)
    end
end
puts "finished seeding!! 🏙️ 🚕 🌭 "