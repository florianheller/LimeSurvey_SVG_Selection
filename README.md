# LimeSurvey SVG Selection Question Theme
A question theme to create multiple choice questions using SVG images. 

## Purpose
I wanted to run a survey where I needed participants select certain elements of a figure and the easiest way of doing so is by clicking. 

## Installation
Download the svgselection.zip file and install it using the theme editor (LS4) or by uploading its contents to /upload/themes/question/

## Usage

To be able to use an SVG-file with this theme it needs a bit of preparation. 

### Prepare the SVG File
- All items that should be clickable need to have the class "clickTarget" assigned. This is used to attach the event handler to it. 
- Your SVG should define some CSS class called "selected". The script uses this to indicate that an item has been selected.

.selected{stroke: rgba(255,0,0,1)!important;}
.clickTarget{stroke: rgba(255,0,0,0); stroke-width: 6px;}

- The ID of your item will be used to link it to the subquestion, so the IDs should have the same format, e.g., "SQ00101" 

<line x1="156.16" y1="18.39" x2="156.16" y2="4.25" class="clickTarget" id="SQ0101" />
<line x1="156.16" y1="4.25" x2="71.12" y2="4.25" class="clickTarget" id="SQ0102 "/>

### Create the question
- Create a multiple-choice question and set its template to be SVG Selection
- Upload the SVG file to LimeSurvey (Survey Settings — Resources)
- Add the absolute path in the SVG Path field under 'Display'

### Adding subquestions
Now add as many subquestions as you have click targets, and assign each subquestion an ID form your SVG. 

# License
This question theme is licensed under MIT License. 

# Acknowledgements
This work was supported by Hasselt University. 