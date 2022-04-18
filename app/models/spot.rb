class Spot < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    has_many :favorites, dependent: :destroy
    has_many :favorited_by, through: :favorites, source: :user #user who faved

    validates :name, uniqueness: true
end
