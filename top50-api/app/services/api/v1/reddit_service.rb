require 'net/http'
require 'uri'

module Api::V1
  class RedditService

    def top50
      url = URI('https://www.reddit.com/top.json?limit=50')

      begin
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true

        request = Net::HTTP::Get.new(url, {'User-Agent' => 'user_agent'})
        response = http.request(request)

        JSON.parse(response.body)
      rescue => error
        puts error
        false
      end
    end
  end
end
