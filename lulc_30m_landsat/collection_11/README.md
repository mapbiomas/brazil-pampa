# Pampa

Developed by **GeoKarten**  
📧 **schirmbeck.j@gmail.com**

---

# About

This repository contains the scripts to classify and post-process the **Pampa biome** land use and land cover maps of **Collection 11 (1985–2025)**.

Before using these scripts, we strongly recommend reading the **MapBiomas Appendix of the Algorithm Theoretical Basis Document (ATBD)**, which describes the methodology adopted in the project.

📖 https://brasil.mapbiomas.org/download-dos-atbds-com-metodo-detalhado/

---

# How to Use

Before running the workflow, copy all scripts to your **Google Earth Engine (GEE)** account.

The scripts must then be adjusted to your own asset structure and input datasets.

The complete processing workflow is divided into **six sequential steps**:

| Step | Description |
|:----:|-------------|
| **1** | Prepare the samples dataset used to train the Random Forest classifier. |
| **2** | Perform the classification for each of the seven regions of the Pampa biome. |
| **3** | Apply the post-classification filters. |
| **4** | Mosaic the regional classification results to obtain the biome map. |
| **5** | Reclassify the annual maps for integration. |
| **6** | Export the final biome maps as one image per year. |

---

# Repository Structure

## Step 1 — Prepare the Samples Dataset

Scripts responsible for generating, validating and exporting the training samples used by the Random Forest classifier.

---

## Step 2 — Classification

Scripts responsible for performing the annual land use and land cover classification for each region of the Pampa biome.

---

## Step 3 — Post-Classification

Collection of spatial and temporal filters used to improve the consistency of the classification through time.

---

## Step 4 — Mosaic

Merge the classified regions into a single biome-wide map.

---

## Step 5 — Reclassification

Reclassify specific classes after the post-classification process in order to produce the final legend adopted by Collection 11.

---

## Step 6 — Export

Export each annual map as an independent Earth Engine asset, ready for integration with the MapBiomas cross-cutting themes.

---

# List of Scripts

The following sections describe each script contained in this repository according to the workflow presented above.

# Step 1 — Prepare the Samples Dataset

The scripts in this step generate, validate, and export the training samples used by the Random Forest classifier.

---

## `Step01A_generate_stable_areas_from_coll10.js`

Generates and exports class stable-area maps for three temporal intervals:

| Interval | Years |
|:---------|:------|
| **1** | 1985–1998 |
| **2** | 1999–2012 |
| **3** | 2013–2024 |

These stable-area maps are used as reference datasets during the preparation and validation of the training samples.

---

## `Step01B_validate_samples_1985_2022.js`

For the period **1985–2022**, the workflow uses the same training samples adopted in **MapBiomas Collection 10**, originally selected from the stable areas of **Collection 8**.

To validate these annual samples, they are overlaid with the stable-area maps of each land-cover class generated from **Collection 10.1**, considering the corresponding temporal interval.

Samples without agreement between both datasets are discarded during this validation process.

---

## `Step01C_validate_samplePts_2023_2025.js`

For the period **2023–2025**, the workflow keeps the same sample locations adopted in **MapBiomas Collection 10**, originally selected from the stable areas of **Collection 8** for the **2013–2022** interval.

These sample geometries are validated by overlaying them with the stable-area maps generated from **Collection 10.1** for the **2013–2024** period.

---

## `Step01D_export_annual_training_samples_2023_to_2025.js`

Exports the annual training samples by adding the variables extracted from the corresponding annual mosaics to every sample point.

The resulting dataset is used as input for the classification stage.

---

# Step 2 — Classification (1985–2025)

The Pampa biome is divided into **seven regions** for the classification process.

The following scripts perform the Random Forest classification independently for each region.

## Regional Classification

| Region | Script |
|:------:|:-------|
| 1 | `Step02_classify_region_01.js` |
| 2 | `Step02_classify_region_02.js` |
| 3 | `Step02_classify_region_03.js` |
| 4 | `Step02_classify_region_04.js` |
| 5 | `Step02_classify_region_05.js` |
| 6A | `Step02_classify_region_06A.js` |
| 6B | `Step02_classify_region_06B.js` |
| 6C | `Step02_classify_region_06C.js` |
| 7 | `Step02_classify_region_07.js` |

---

## `Step02_classify_rocky_outcrop.js`

This script classifies **rocky outcrops** within areas where their occurrence is supported by geological information.

The resulting map is later incorporated into the annual land use and land cover maps during the reclassification stage.
# Step 3 — Post-Classification Process

The post-classification workflow applies a sequence of spatial and temporal filters designed to improve the consistency of the annual land use and land cover maps.

Each filter addresses a specific type of classification error. The filters are applied sequentially, with the output of one filter serving as the input for the next.

---

## `Step03_Filter_01_gap_region.js`

Replaces pixels with missing data using information from the previous or subsequent year.

This procedure fills temporal gaps in the annual time series while preserving temporal consistency.

---

## `Step03_Filter_02_temporal_region.js`

Uses information from previous and subsequent years to identify and correct pixel misclassifications for a given year, based on a predefined set of invalid land-cover transitions.

---

## `Step03_Filter_03_temporal_absence.js`

Removes sequences of **3, 2 and 1 consecutive years** classified as **Forest**, considered false positives, only in time series where forests are absent in both the first and last years of the **1985–2025** period.

---

## `Step03_Filter_04_arrange_incidence.js`

Prepares the annual classification maps to run the incidence filter.

---

## `Step03_Filter_05_frequency.js`

This filter is applied conservatively to solve only well-defined classification problems.

Collection 11 employs four different frequency filters.

### 1. Relief Shadow × Water and Wetland

Corrects false positives of **Water** and **Wetland** caused by terrain shadows in regions with rugged relief.

**Applied only in regions:**

- Region 1
- Region 2
- Region 3
- Region 4
- Region 5

---

### 2. Wetlands × Other Natural Classes

Corrects wetland pixels that were incorrectly classified as other natural vegetation classes.

**Applied in all regions.**

---

### 3. Paddy Rice × Wetlands

Corrects the confusion between **Paddy Rice** and temporary **Water** or **Wetland**.

**Applied only in:**

- Region 5
- Region 6
- Region 7

---

### 4. Non-Vegetated Areas

Stabilizes the **Non-Vegetated Area** class through time.

Pixels with high temporal frequency retain the class, while pixels with low temporal frequency are corrected.

---

## `Step03_Filter_06_incident.js`

Corrects false land-cover transitions observed along the boundaries between adjacent patches belonging to different classes.

---

## `Step03_Filter_07_extremes.js`

Smooths transitions between:

- the first and second years of the time series;
- the penultimate and final years of the time series.

This reduces edge effects at the temporal limits of the dataset.

---

## `Step03_Filter_08_wetlands_stability.js`

Applies a set of rules to improve the temporal stability of wetland classifications throughout the annual time series.

---

## `Step03_Filter_09_ending_spatial.js`

Applies a spatial majority filter to isolated pixels or very small patches (less than six pixels).

Each isolated pixel or patch is replaced by the most frequent class among its eight neighboring pixels.

---

## `Step03_Filter_10_ending_temporal.js`

Applies the same three-year temporal filters previously described to remove incidental classification effects introduced by the combined application of the previous filters.

---

## `Step03_Filter_11_wetlands_stability_plus.js`

Applies an additional temporal filter to further improve the stability of wetland classifications.

---

## `Step03_Filter_12_granular_prepare.js`

Identifies and generates polygons of the **Mosaic of Uses (Class 21)** considering patches smaller than **2 hectares**.

For each polygon, the script calculates:

- proportion of neighboring Forest pixels;
- proportion of neighboring Wetland pixels;
- proportion of neighboring Grassland pixels;
- proportion of neighboring Water pixels;
- polygon area;
- polygon perimeter.

These attributes are later used by the granular filtering procedure.

---

## `Step03_Filter_13_granular_apply.js`

Removes small patches of **Mosaic of Uses (Class 21)** that are incorrectly classified inside larger patches, mainly of:

- Grassland;
- Forest;
- Wetland;
- Water.

The replacement class is defined according to the predominant surrounding class.

To avoid removing true positive patches, an exclusion mask is applied.

The mask is generated using the **Cadastro Ambiental Rural (CAR)** database, selecting rural properties up to **80 hectares**.

Small **Mosaic of Uses** patches intersecting this mask are considered true positives and are therefore preserved during the filtering process.

# Step 4 — Mosaic the Regional Maps

After all regional classifications have been post-processed, the individual regional maps are merged into a single biome-wide annual map.

---

## `Step04_Mosaic_regions.js`

Mosaics the post-classification results from all Pampa regions into a single annual land use and land cover map for the entire biome.

The resulting images are used as the input for the reclassification stage.

---

# Step 5 — Reclassification for Integration

After the post-classification process, four additional classes are incorporated into the annual maps before their integration into the MapBiomas collection.

---

## `Step05_reclass_for_integration.js`

This script adds four complementary classes to the annual maps.

### Additional Classes

| Class | Description |
|------|-------------|
| Rocky Outcrop | Classified independently and overlaid onto the annual maps. |
| Wooded Sandbank Vegetation | Obtained through reclassification of Forest areas. |
| Herbaceous Sandbank Vegetation | Obtained through reclassification of Grassland areas. |
| Salt Marsh (Beta) | Obtained through reclassification of Wetland areas. |

---

### 1. Herbaceous Sandbank Vegetation

Herbaceous Sandbank Vegetation is generated by reclassifying all patches classified as **Grassland** that simultaneously satisfy the following conditions:

- located within the **Brazilian Marine and Coastal System** (IBGE, 2019);
- located over **Regosols (Neossolos Regolíticos)** according to the IBGE (2018) soil classification map.

---

### 2. Wooded Sandbank Vegetation

Wooded Sandbank Vegetation is generated by reclassifying all patches classified as **Forest** within the limits of the **Brazilian Marine and Coastal System** (IBGE, 2019).

For Collection 11, this reclassification is additionally restricted to areas mapped as **Regosols**, adopting the same criterion used for Herbaceous Sandbank Vegetation.

---

### 3. Salt Marsh (Beta)

Salt Marsh is generated by reclassifying patches classified as **Wetland** that intersect mapped salt marsh areas obtained from specialized academic literature.

Reference:

> Marangoni & Costa (2009)

---

# Step 6 — Export Annual Maps

The final step exports each annual map individually, making the data ready for integration into the MapBiomas collection.

---

## `Step06_year_by_year_export.js`

Exports each annual land use and land cover map as an independent Earth Engine asset.

Each exported asset corresponds to a single year and is prepared for subsequent integration with the MapBiomas cross-cutting themes.

---

# Processing Workflow Summary

The complete workflow implemented in this repository follows the sequence below.

| Step | Script Group | Purpose |
|:---:|--------------|---------|
| **1** | Sample preparation | Generate, validate and export training samples |
| **2** | Classification | Perform Random Forest classification for each region |
| **3** | Post-classification | Apply temporal and spatial consistency filters |
| **4** | Mosaic | Merge regional maps into a biome-wide map |
| **5** | Reclassification | Add complementary classes for integration |
| **6** | Export | Export one image per year |

---

# References

MapBiomas Project

Algorithm Theoretical Basis Document (ATBD)

https://brasil.mapbiomas.org/download-dos-atbds-com-metodo-detalhado/

---

# Contact

**GeoKarten**

📧 schirmbeck.j@gmail.com