class RacesController < ApplicationController
    def index
        races = Race.all 
        render json: races
    end

    def show
        race = Race.find(params[:id])
        render json: race
    end
end
