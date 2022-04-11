class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :category, :reviews, :lat, :lng
end
