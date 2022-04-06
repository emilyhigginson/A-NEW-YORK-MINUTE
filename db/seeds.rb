# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding ... "

User.destroy_all
Spot.destroy_all 

emily = User.create(username: "emhiggs" , password: "123", email: "emily@gmail.com")

emily.avatar.attach(
    io: File.open('client/public/emily.png'), 
    filename: 'emily.png', 
    content_type: 'application/png'
)
Spot.create(name: "Thursday Kitchen", image: "https://cdn.vox-cdn.com/thumbor/2sn-FrXl1sd5f1mDu4FnaWjNjWw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19683612/Mokyo_44.jpg", location: "East Village", category: "Food & Drink", price_range: 2, walk_in: true )
Spot.create(name: "Tompkins Square Bagels", image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-05/16/14/enhanced/webdr13/original-31784-1463422870-4.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", location: "East Village", category: "Food & Drink", price_range: 2, walk_in: true )
Spot.create(name: "Smorgasburg", image: "http://dishelinguide.com/wp-content/uploads/2015/04/red-hook-lobster-rolls2.png", location: "Williamsburg", category: "Food & Drink", price_range: 2, walk_in: true )
Spot.create(name: "Street Taco", image: "https://d1ralsognjng37.cloudfront.net/97fd0995-a974-40a9-af8b-ecf2a0024bd8.jpeg", location: "Kips Bay", category: "Food & Drink", price_range: 3 , walk_in: true )
Spot.create(name: "Ruby's Cafe", image: "https://c0.wallpaperflare.com/preview/1018/396/976/ruby-s-cafe-soho-nyc-food.jpg", location: "Kips Bay", category: "Food & Drink", price_range: 2 , walk_in: true  )
Spot.create(name: "Bagel Schmear", image: "https://anotherfoodcritic.files.wordpress.com/2017/05/bagels-schmear-house-special.jpg", location: "Kips Bay", category: "Food & Drink ", price_range: 2 , walk_in: true )
Spot.create(name: "Handcraft", image: "https://www.nyrestaurantsguide.com/wp-content/uploads/img/newamerican/handcraft/handcraft_kitchen_and_cocktails_new_york_food_1.jpg", location: "Kips Bay", category: "Food & Drink", price_range: 3, walk_in: true  )
Spot.create(name: "Union Square Farmer's Market", image: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/10/10131220/14712846912_8fa8556a3a_k.jpg", location: "Union Square", category: "Activity", price_range: 1 , walk_in: true )
Spot.create(name: "New York Public Library", image: "https://images.unsplash.com/photo-1576164285450-6d26c5b1a2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMHB1YmxpYyUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80", location: "Bryant Park", category: "Activity", price_range: 1 , walk_in: true  )

Favorite.create(user_id: User.first.id, spot_id: Spot.first.id)

puts "finished seeding!! 🏙️ 🚕 🌭 "