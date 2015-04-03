Meteor.publish('nearbyPlaces', function(bottomLeft, topRight) {
  if (!bottomLeft && !topRight) {
    return [];
  }
  return Places.find( { place: { $geoWithin: {$box: [bottomLeft, topRight]} } });
});
