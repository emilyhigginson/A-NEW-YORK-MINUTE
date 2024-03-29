class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews, dependent: :destroy
    has_many :spots, through: :reviews
    has_many :favorites
    has_many :favorite_spots, through: :favorites, source: :spot # spots that are favorited

   

    has_many :friended_users, foreign_key: :friender_id, class_name: 'Friend'
    has_many :friendees, through: :friended_users
    
    has_many :friendedby_users, foreign_key: :friendee_id, class_name: 'Friend'
    has_many :frienders, through: :friendedby_users


end
