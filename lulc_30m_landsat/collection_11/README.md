
# Pampa
Developed by GeoKarten - schirmbeck.j@gmail.com
## About
This folder contains the scripts to classify and post-process the # Pampa biome land
use

and

land

cover

maps

of

collection

11

(1985-2025).

We recommend reading the MapBiomas Appendix of the Algorithm Theoretical Basis
Document

(ATBD)

before

using

the

scripts.


https://brasil.mapbiomas.org/download-dos-atbds-com-metodo-detalhado/
## How to use
First, you need to copy these scripts to your Google Earth Engine (GEE) account. To
run

the

scripts,

they

need

to

be

adjusted

to

your

data

assets.

The

process

has

been

divided

into

six

steps,

which

are:


- ### Step 1 - Prepare the samples dataset to train Random Forest classifier.
- Step 2 - Perform classification by region. The # Pampa Biome is divided into
seven

regions.
- Step 3 - Perform post-classification processing.
- Step 4 - Mosaic the post-classification images to obtain the biome map.
- Step 5 - Reclassify the classification results for integration.
- Step 6 - Export the biome map as separate images, with one image for each
year.
## List of scripts
### Step 1 - Prepare the samples dataset to train Random Forest classifier.

- Step01A_generate_stable_areas_from_coll10.js : generate and export class
stable-area

maps

for

three

time

intervals:

1

(1985-1998),

2

(1999-2012)

and

3

(2013-2024).

- Step01B_validate_samples_1985_2022.js: for the period 1985 - 2022, we
used

the

same

samples

used

in

MapBiomas

Collection

10

(selected

from

stable

areas

of

collection

8).

To

validate

these

annual

samples

we

overlaid

them

with

the

stable

areas

of

each

class,

for

the

corresponding

time

intervals,



generated from Collection 10.1. A small fraction of these samples was
discarded

because

it

did

not

show

a

match

in

this

process.

- Step01C_validate_samplePts_2023_2025.js: for the period 2023 - 2025, we
used

the

same

samples

localization

used

in

MapBiomas

Collection

10

(selected

from

stable

areas

of

collection

8

for

the

interval

2013-2022).

Then

we

validated

these

geometries

with

an

overlay

with

stable

areas

of

Collection

10.1

for

the

interval

2013-2024.


- Step01D_export_annual_training_samples_2023_to_2025.js: export the
annual

training

samples

adding

variables

from

the

correspondent

annual

mosaics

to

the

sample

points.

### Step 2 - Classification for 1985–2025 by region.
The # Pampa Biome was divided into seven regions for the classification process. The following scripts run the Random Forest classification for the seven # Pampa
regions:

- Step02_classify_region_01.js
- Step02_classify_region_02.js
- Step02_classify_region_03.js
- Step02_classify_region_04.js
- Step02_classify_region_05.js
- Step02_classify_region_06A.js
- Step02_classify_region_06B.js
- Step02_classify_region_06C.js
- Step02_classify_region_07.js
- Step02_classify_rocky_outcrop.js: This script classifies rocky outcrops within
the

zones

where

its

presence

is

known

according

to

geology.

### Step 3 - Post-Classification process

- Step03_Filter_01_gap_region.js : replaces pixels with missing data using data
from

the

previous

or

subsequent

year.

- Step03_Filter_02_temporal_region.js: Uses information from previous and
subsequent

years

to

identify

and

correct

pixel

misclassifications

for

a

given

year,

based

on

a

predefined

set

of

invalid

transitions.

- Step03_Filter_03_temporal_absence.js: removes sequences of 3, 2, and
1year

classified

as

forest

(considered

as

false

positives)

only

in

those

time

series

where

forests

are

absent

in

the

first

and

last

years

of

the

1985–2025

series.




- Step03_Filter_04_arrange_incidence.js: Prepares the data to run incidence
filter.
- Step03_Filter_05_frequency.js: This filter was used with parsimony to solve
only

well

delimited

cases.

Four

different

variations

of

the

frequency

filters

were

employed

in

Collection

11,

as

described

below:
1 – Relief shadow x water and wetland – it aims to correct false
positives

of

water

and

wetland

in

shaded

slopes

in

regions

with

wavy

relief.

It

was

applied

only

in

regions

1,

2,

3,

4

and

5.
2 – Wetlands x other natural classes – it was used to fix
misclassifications

of

wetland

in

other

classes.

It

was

applied

in

all

regions.
3 – Paddy rice x wetlands – it was used to fix the confusion of paddy
rice

with

temporary

water

or

wetland,

and

was

applied

only

in

regions

5,

6,

and

7.

4 – Non vegetated áreas – it fixes the class over time for pixels with
high

temporal

frequency

and

removes

it

in

cases

of

low

temporal

frequency.

- Step03_Filter_06_incident.js: Corrects false transitions observed in pixels
located

at

the

boundaries

of

patches

belonging

to

different

classes.

- Step03_Filter_07_extremes.js: Smooths transitions between the first and
second

years

and

between

the

penultimate

and

final

years

of

the

time

series.

- Step03_Filter_08_wetlands_stability.js: Stabilizes wetland classifications
throughout

the

time

series

using

certain

rules.
- Step03_Filter_09_ending_spatial.js: uses a mask to change isolated pixels or
very

small

patches

(less

than

six

pixels)

of

a

class

by

replacing

each

one

with

the

most

frequent

value

in

their

corresponding

eight

neighbors
- Step03_Filter_10_ending_temporal.js: the same temporal 3-years filters,
previously

described,

was

applied

again

to

remove

incidental

and

unwanted

effects

in

the

filtered

classification

resulting

from

the

combined

application

of

filters.

- Step03_Filter_11_wetlands_stability_plus.js: Applies an additional filter to
improve

the

temporal

stability

of

wetland

classifications.
- Step03_Filter_12_granular_prepare: Identifies and generates polygons of
class

Mosaic

of

uses

(21),

considering

patches

below

2ha.

Then,

it

calculates

for

each

patch

the

proportion

of

neighboring

pixels

classified

as

forest,

wetland,

grassland,

or

water,

as

well

as

area

and

perimeter.

- Step03_Filter_13_granular_apply: applied to remove small patches of the
class

Mosaic

of

uses,

incorrectly

classified

within

larger

patches,

mainly

of

grasslands,

but

also

of

forest,

wetlands,

and

water

classes.

Data

replacement

uses

the

predominant

surrounding

class

(forest,

wetland,

grassland,

or

water).

To

avoid

undue

corrections,

an

exclusion

mask

was

applied

on

the

biome.

The

mask

was

generated

based

on

the

Rural

Environmental

Registry

(CAR

–

Cadastro

Ambiental

Rural,

in

portuguese),

a

database

containing

the

boundaries

of

each

rural

property.

All

small

properties

(up

to

80

hectares)



were selected to integrate the mask. All small patches of class Mosaic of uses
intersecting

with

this

mask

where

considered

as

true

positives

and

were

not

filtered.

### Step 4 - Mosaic the post-Classification images to obtain the biome map

- Step04_Mosaic_regions.js
### Step 5 - Reclassification for integration.

- Step05_reclass_for_integration.js: After the post-classification process, four
additional

classes

were

added

to

the

annual

maps.

The

first

corresponds

to

the

rocky

outcrop

class,

classified

separately

from

the

other

classes

and

overlaid

to

each

annual

map

The

three

other

classes

correspond

to

wooded

sandbank

vegetation,

herbaceous

sandbank

vegetation

and

salt

marsh.

They

were

included

after

the

final

classification

through

reclassification

procedures:
1. Herbaceous sandbank vegetation was defined as reclassifying all the
patches

classified

as

grasslands

within

the

limits

of

the

Brazilian

marine

and

coastal

system

(IBGE,

2019)

and

belonging

to

Regosols

(
Neossolos

regolíticos

in

Portuguese)

patches

from

a

soil

classification

map

(IBGE,

2018).
2. Wooded sandbank vegetation was defined as reclassifying all the patches
classified

as

Forest

within

the

limits

of

the

Brazilian

marine

and

coastal

system

(IBGE,

2019).

In

collection

11

we

additionally

limited

the

reclassification

only

to

Regosols

patches,

the

same

criteria

adopted

for

herbaceous

sandbank

vegetation.
3. Salt marsh (beta) was defined as reclassifying all the patches classified as
wetlands

within

the

boundaries

of

mapped

patches

obtained

from

specialized

academic

literature

(Marangoni

&

Costa,

2009).


### Step 6 - Export the biome map as separate images, one image per year.

- Step06_year_by_year_export.js – each annual map is exported to a specific
asset

ready

to

be

used

in

the

integration

with

the

cross-cutting

themes.

