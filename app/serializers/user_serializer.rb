class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :favorite_spots, :spots, :friendees, :frienders
end
