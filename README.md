# DuckBands-Project1

## Project Name: Recording Duck Banding

## Introduction to the FDBB
Welcome to the website of the FDBB, which stands for the Federal Department of Bird Banding! The job of the FDBB is to band birds throughout the country, and record data on the sightings of such birds, tracking their movements for scientific research! If you are reading this, that means you have signed up as a new volunteer or employee! So welcome aboard! 

## The Mission of the FDBB
As a new member of the FDBB, you will use this SPA (Single Page Application) to record the following:
1) The banding of a new bird.
2) The sighting of a previously banded bird.
3) The death of a previously banded bird.

## Getting Started
To get started, start your json-server. This is done by typing "json-server --watch db.json" in your console terminal. Starting the json-server gives you access to the current data of banded birds. With this access, you will be able to add, update, or remove birds, depending on what has transpired. 

Next, open the `index.html` file in the browser. It is crucial to start the json-server first before opening the html file, otherwise you will have no access to the duck banded data.

## Information Needed
When approaching the application, please have some of the following information ready!
1) Band number, sub-species, image, and description of a newly banded bird!
2) Sighting of a new bird to add an increment.
3) Sad news of the passing of a bird, and ready to eliminate from the data set.

If you want to play around with the application first, here is some test data to use as a test!
Band Number: 1-Z
Sub-Scpecies: Green-Winged Teal
Image: https://www.allaboutbirds.org/guide/assets/photo/63893401-720px.jpg
Description: Just a test! But this is a super cool bird isnt it?

The following link shows a quick tutorial on how to work the application:

**MAKE SURE TO DELETE THIS BIRD ONCE YOU HAVE COMPLETED YOUR PRACTICE! DO NOT DELETE ANY OTHER BIRDS UNLESS DEATH CONFIRMED**

## How to work the SPA
A New Band: When entering the application in the browser, you are presented with a form to fill out, with input boxes for multiple types of information. Once you have finished banding a bird, supply the information you recorded into the input boxes. Provide the band number, sub-species, an image, and any necessary notes of the bird itself. From there, press the "Banded!" button. Once you scroll down to the bottom of the page, you will see the newly banded bird added to the list of currently banded birds across the country!

A New Sighting: If you see a bird in the wild that has a band belonging to the FDBB, scroll to the bird that matches the band number you saw. From here, click on the "Additional Sighting" button underneath the notes, and you will see that the sighting count for that bird will increase by 1!

Reporting a Death: If you have recieved information about one of the banded ducks dying, we want to make sure we remove that duck from the list of banded birds. Underneath the notes is another button labeled "Report Death". If you hover your mouse over this button, a legal notice will pop up, informing you about the need to check for a pulse! Once you are confident that the duck has passed, click the "Report Death" button, and the bird will disappear from the list of banded birds.

## Conclusion
Thank you for your time working at the FDBB! Your actions on this application will help us track which birds currently are banded, allowing for scientifc data to be collected and analyzed. We hope that this application was straight forward and easy to use, and provided multiple paths to interactivity. 

## Reswources
Author: Michael Lange
Acknowledgments:
Duck Pictures: The Cornell Lab of Ornithology
Educational Support: Flatiron School and Instructors

The following link gives some insight on the creation of this application's interactivity:
