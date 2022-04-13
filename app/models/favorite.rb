class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :spot

    def spot_name
        self.spot.name
      end

      def spot_image
        self.spot.image
      end

      def spot_category
        self.spot.category
      end

      def spot_location
        self.spot.location
      end

      def spot_image
        self.spot.image
      end
   
end

