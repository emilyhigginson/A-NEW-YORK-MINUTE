class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews, dependent: :destroy
    has_many :spots, through: :reviews
    has_many :favorites
    has_many :favorite_spots, through: :favorites, source: :spot # spots that are favorited
end
