class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :category, :price_range, :walk_in, :reviews
end
