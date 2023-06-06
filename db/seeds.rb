# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

    require "open-uri"
    
    puts "Destroying tables..."
    Review.destroy_all
    User.destroy_all
    Shop.destroy_all 
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('shops')
    # ApplicationRecord.connection.reset_pk_sequence!
    # ('reviews')
  
    puts "Creating users..."

    User.create!(
      first_name: 'demo', 
      last_name: 'user',
      email: 'demo@demo.com', 
      zip_code: '11370',
      password: '123456'
    )

    10.times do 
        User.create!({
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name ,
          email: Faker::Internet.unique.email,
          zip_code: Faker::Address.zip_code,
          password: 'password'
        }) 
      end

      Shop.create!(
        name: 'Van Leeuwen Ice Cream',
        address: '204 Wythe Ave',
        city: 'New York',
        state: 'New York',
        zip_code: "11249",
        link: 'https://vanleeuwenicecream.com/',
        price_range: 8,
        phone_number: '(929)337-6907',
        longitude: 40.7184296,
        latitude: -73.9623795,
        opening_time: 9,
        closing_time: 7,
        rating: 4.5
      )
      Shop.create!(
        name: 'Minus Celsius',
        address: '302 Grand St',
        city: 'New York',
        state: 'New York',
        zip_code: "10002",
        link: 'https://www.mcusa.net/',
        price_range: 10,
        phone_number: '(407)797-7174',
        longitude: 40.718162,
        latitude: -73.993784,
        opening_time: 10,
        closing_time: 9,
        rating: 4
      )

      Shop.create!(
        name: 'Odd Fellows',
        address: '334 Furman Street',
        city: 'Brooklyn',
        state: 'New York',
        zip_code: "11201",
        link: 'https://www.oddfellowsnyc.com/',
        price_range: 9,
        phone_number: '(845)495-3229',
        longitude: 40.6950,
        latitude: 73.0017,
        opening_time: 9,
        closing_time: 9,
        rating: 3
      )
  
      Shop.create!(
        name: 'Venchi',
        address: '861 Broadway',
        city: 'New York',
        state: 'New York',
        zip_code: "10003",
        link: 'https://us.venchi.com/',
        price_range: 10,
        phone_number: '(646)448-8663',
        longitude: 40.737460,
        latitude: -73.990580,
        opening_time: 11,
        closing_time: 11,
        rating: 5
      )

      Shop.create!(
        name: "Gunther's Ice Cream",
        address: '2801 Franklin Blvd',
        city: 'Sacramento',
        state: 'CA',
        zip_code: "95818",
        link: 'http://gunthersicecream.com/',
        price_range: 8,
        phone_number: '(916)457-6646',
        longitude: 38.539902,
        latitude: -121.475510,
        opening_time: 11,
        closing_time: 9,
        rating: 5
      )

      Shop.create!(
        name: 'Lillo Gelato',
        address: 'Bagdat Cad. No:280',
        city: 'Kadikoy',
        state: 'Istanbul',
        zip_code: "34872",
        link: 'https://lillo.com.tr/',
        price_range: 5,
        phone_number: '(530)629-9926',
        longitude: 40.932690,
        latitude: 29.126810,
        opening_time: 12,
        closing_time: 7,
        rating: 4.5
      )
      
      Review.create!(
        body: "O la la! Fantastic ice-cream!",
        rating: 5,
        shop_id: 4,
        user_id: 1
      )

      Review.create!(
        body: "It was summer but still ice cream melted too fast",
        rating: 1,
        shop_id: 5,
        user_id: 4
      )
      Review.create!(
        body: "Oh boy, where do I even begin with this ice cream shop? It's like stepping into a parallel universe of frozen dreams and never-ending brain freezes! Gunther's Ice Cream is an absolute masterpiece, and let me tell you, they've got the scoop on how to make you forget your worries, at least until the ice cream headache hits!",
        rating: 4,
        shop_id: 4,
        user_id: 6
      )

      Review.create!(
        body: " They don't mess around when it comes to serving sizes. A single scoop here is equivalent to a mountain in other places. Brace yourself for a sugar rush that could power a small town for a week. It's like they believe in the motto: 'Go big or go home,' but they forgot to include the 'and then take a nap' part.",
        rating: 3.5,
        shop_id: 6,
        user_id: 8
      )

      Review.create!(
        body: "Their ice cream is like a sweet poetry for your taste buds. Each lick takes you on a journey to a land of pure bliss, where worries melt away faster than the ice cream in your cone. I couldn't help but feel like a kid again, with every scoop bringing back memories of carefree summer days and sticky fingers.
        But beware! The lines can get quite long, as people flock from far and wide to experience this frozen wonderland. So, make sure you bring a good book or come prepared with an arsenal of ice cream-related puns to keep yourself entertained while you wait.",
        rating: 4,
        shop_id: 4,
        user_id: 3
      )

      Review.create!(
        body: "The staff here must have a Ph.D. in ice creamology because they know exactly how to create the perfect scoop. They're always ready with a smile, eager to help you navigate through the vast galaxy of flavors. Their enthusiasm is contagious, making the whole experience even sweeter.",
        rating: 5,
        shop_id: 6,
        user_id: 5
      )


    puts "Done!"

    puts "aws"

    Shop.all.each_with_index do |shop, index|
      unless shop.photo.attached?
        file = URI.open("https://melt-seeds.s3.amazonaws.com/shop1.jpg")
        shop.photo.attach(io: file, filename: "shop1.jpg")
      end
        
    end

    puts "help! im melting"