json.extract! group, :id, :name, :kind
json.photo_url group.photo.attached? ? url_for(group.photo) : nil