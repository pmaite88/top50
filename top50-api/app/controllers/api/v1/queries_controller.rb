include ActionView::Helpers::DateHelper

module Api::V1
  class QueriesController < ApplicationController

    def top50
      result = Api::V1::RedditService.new.top50

      if result
        render json: { data: serialize(result) }
      else
        render json: { error: true, status: :unprocessable_entity }
      end
    end

    private

    def serialize(object)
      result = []

      object['data']['children'].each_with_index do |item, index|
        element = {}
        element['id'] = item['data']['id']
        element['title'] = item['data']['title']
        element['author'] = item['data']['author']
        element['created_at'] = time_ago_in_words(item['data']['created'])
        element['thumbnail'] = item['data']['thumbnail']
        element['num_comments'] = item['data']['num_comments']

        result << element
      end

      result
    end
  end
end
