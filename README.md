# Map Links Tool for Fachstelle OGD Basel-Stadt

## Overview
This GitHub Pages site provides a user-friendly interface to generate quick access links to various map services using geographical coordinates. It is primarily used by Fachstelle OGD Basel-Stadt to create columns for datasets with geopoints and shapes that are published on our open data portal.

## Features
- **Coordinate Input**: Users can input latitude and longitude through URL parameters to see map links.
- **Map Service Links**: Generates direct links to Google Maps, Apple Maps, Waze, Bing Maps, and OpenStreetMap, customized based on input coordinates.
- **Swisstopo Transformation**: Utilizes the Swisstopo library to convert coordinates from WGS84 to CH1903+ for precise mapping on Swiss maps.

## Example Usage
To view the map links for a specific location, append the latitude and longitude as URL parameters. For instance, to see map links for the Marktplatz in Basel:
'''
https://opendatabs.github.io/map-links/?lat=47.5582203&lon=7.5876745
'''

## Data Integration Example
An example of the datasets that benefit from this tool is the dataset containing locations of Velopumpen in Basel-Stadt, which can be explored here: [Velopumpen in Basel-Stadt](https://data.bs.ch/explore/dataset/100213/)

## Contributing
We welcome contributions from the community, be it for extending the list of supported map services, improving the user interface, or enhancing the coordinate conversion accuracy. Please submit your pull requests or issues to the repository.

## License
This project is made available under the MIT License. See the LICENSE file for more details.
