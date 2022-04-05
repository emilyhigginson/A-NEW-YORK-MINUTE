# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding ... "


User.create(username: "emhiggs" , password_digest: "123", email: "emily@gmail.com")

Spot.create(name: "Thursday Kitchen", image: "https://cdn.vox-cdn.com/thumbor/2sn-FrXl1sd5f1mDu4FnaWjNjWw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19683612/Mokyo_44.jpg", location: "East Village", category: "Food & Drink", price_range: 2, walk_in: true )
Spot.create(name: "Tompkins Square Bagels", image: "https://secretnyc.co/wp-content/uploads/2021/09/218954631_4240243392736803_213812024368176758_n-1024x768.jpg", location: "East Village", category: "Food & Drink", price_range: 2, walk_in: true )

puts "finished seeding!! 🏙️ 🚕 🌭 "