puts "Seeding Race data..."

# Race.create(name: 'Dragonborn')
# Race.create(name: 'Dwarf')
# Race.create(name: 'Elf')
# Race.create(name: 'Drow')
# Race.create(name: 'Gnome')
# Race.create(name: 'Half-Elf')
# Race.create(name: 'Halfling')
# Race.create(name: 'Human')
# Race.create(name: 'Tiefling')

# test user
puts "Seeding User data..."

User.create(username: 'test', password_digest: "password", image_url: "https://cdn.shopify.com/s/files/1/1158/2192/products/One-punch-man-saitama-ok-decal-white_1024x1024.jpg?v=1455425409")

#test character
puts "Seeding PC data..."

# PlayerCharacter.create(user_id: 1, race_id: 3, name: "Vaxildon", image_url: "https://static.wikia.nocookie.net/criticalrole/images/4/4e/Vaxildan2.png/revision/latest?cb=20151228163354", strength: 11, dex: 16, con: 14, intel: 9, wisdom: 14, charisma: 17)

puts 'Done!'
