class PlayerCharactersController < ApplicationController
    
    def index
        characters = PlayerCharacter.all
        render json: character.name
    end

    def show
        character = PlayerCharacter.find(params[:id])
        render json: character
    end 

    def create
        character = PlayerCharacter.create!(character_params)
        render json: character
    end

    def destroy
        character = PlayerCharacter.find_by(id: params[:id])
        character.destroy
    end
    
    private

    def character_params
        params.permit(:user_id, :race_id, :name, :image_url, :strength, :dex, :con, :intel, :wisdom, :charisma)
    end
end
