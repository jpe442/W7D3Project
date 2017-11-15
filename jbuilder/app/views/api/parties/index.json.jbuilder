json.array! @parties do |party|
  json.name party.name
  json.location party.location
  json.guests party.guests do |guest|
    json.name guest.name
  end
end

# [{"name":"Secret Santa Extravaganza",
#   "location":"Portland",
#   "guests":[{"name":"John Smith"},
#             {"name":"Jane Doe"},
#             {"name":"Josh Brown"},
#             {"name":"Helen White"},
#             {"name":"Job Bluth"}]},
# {"name":"Charles' Christmas Party",
#   "location":"San Francisco",
#    "guests":[{"name":"Josh Brown"},
#               {"name":"Helen White"}]}]