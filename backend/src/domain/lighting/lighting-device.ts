export enum PlaceOfInstallationOfTheLightingDevice {
  NOT_INSTALLED = "NOT_INSTALLED",
  LIVING_ROOM_CEILING_1 = "LIVING_ROOM_CEILING_1",
  LIVING_ROOM_CEILING_2 = "LIVING_ROOM_CEILING_2",
  LIVING_ROOM_CEILING_3 = "LIVING_ROOM_CEILING_3",
  LIVING_ROOM_CEILING_4 = "LIVING_ROOM_CEILING_4",
  LIVING_ROOM_CEILING_5 = "LIVING_ROOM_CEILING_5",
  LIVING_ROOM_CEILING_6 = "LIVING_ROOM_CEILING_6",
  LIVING_ROOM_CEILING_7 = "LIVING_ROOM_CEILING_7",
  LIVING_ROOM_CEILING_8 = "LIVING_ROOM_CEILING_8",
  LIVING_ROOM_CEILING_9 = "LIVING_ROOM_CEILING_9",
  LIVING_ROOM_CEILING_10 = "LIVING_ROOM_CEILING_10",
  LIVING_ROOM_CEILING_11 = "LIVING_ROOM_CEILING_11",
  LIVING_ROOM_CEILING_12 = "LIVING_ROOM_CEILING_12",
  LIVING_ROOM_CEILING_13 = "LIVING_ROOM_CEILING_13",
  LIVING_ROOM_CEILING_14 = "LIVING_ROOM_CEILING_14",
  LIVING_ROOM_CEILING_15 = "LIVING_ROOM_CEILING_15",
  LIVING_ROOM_STAND = "LIVING_ROOM_STAND",
  LIVING_ROOM_KITCHEN = "LIVING_ROOM_KITCHEN",
  GAMING_ROOM_CEILING_1 = "GAMING_ROOM_CEILING_1",
  GAMING_ROOM_CEILING_2 = "GAMING_ROOM_CEILING_2",
  GAMING_ROOM_CEILING_3 = "GAMING_ROOM_CEILING_3",
  GAMING_ROOM_CEILING_4 = "GAMING_ROOM_CEILING_4",
  GAMING_ROOM_CEILING_5 = "GAMING_ROOM_CEILING_5",
  GAMING_ROOM_CEILING_6 = "GAMING_ROOM_CEILING_6",
  GAMING_ROOM_CHANDELIER = "GAMING_ROOM_CHANDELIER",
  GAMING_ROOM_TV_STAND = "GAMING_ROOM_TV_STAND",
  GAMING_ROOM_BEDSIDE_TABLE_1 = "GAMING_ROOM_BEDSIDE_TABLE_1",
  GAMING_ROOM_BEDSIDE_TABLE_2 = "GAMING_ROOM_BEDSIDE_TABLE_2",
  GAMING_ROOM_WORKBENCH_1 = "GAMING_ROOM_WORKBENCH_1",
  GAMING_ROOM_WORKBENCH_2 = "GAMING_ROOM_WORKBENCH_2",
  BATH_ROOM_1 = "BATH_ROOM_1",
  BATH_ROOM_2 = "BATH_ROOM_2",
  BATH_ROOM_MIRROR_1 = "BATH_ROOM_MIRROR",
  BED_ROOM_CHANDELIER = "BED_ROOM_CHANDELIER",
  BED_ROOM_BEDSIDE_TABLE_1 = "BED_ROOM_BEDSIDE_TABLE_1",
  BED_ROOM_BEDSIDE_TABLE_2 = "BED_ROOM_BEDSIDE_TABLE_2",
  BED_ROOM_STAND = "BED_ROOM_STAND",
  HALL_1 = "HALL_1",
  HALL_2 = "HALL_2",
  HALL_3 = "HALL_3",
  HALL_4 = "HALL_4",
  HALLWAY_1 = "HALLWAY_1",
  HALLWAY_2 = "HALLWAY_2",
  HALLWAY_3 = "HALLWAY_3",
  PORCH_1 = "PORCH_1",
  PORCH_2 = "PORCH_2",
  UTILITY_ROOM_1 = "UTILITY_ROOM_1",
  UTILITY_ROOM_2 = "UTILITY_ROOM_2",
  UTILITY_MIRROR = "UTILITY_MIRROR",
  CABINET_1 = "CABINET_1",
  CABINET_2 = "CABINET_2",
  CABINET_3 = "CABINET_3",
  CABINET_4 = "CABINET_4",
  CABINET_WORKBENCH_1 = "CABINET_WORKBENCH_1",
  CABINET_WORKBENCH_2 = "CABINET_WORKBENCH_2",
  CABINET_WORKBENCH_3 = "CABINET_WORKBENCH_3",
  CABINET_WORKBENCH_4 = "CABINET_WORKBENCH_4",
  ENGINEERING_ROOM_1 = "ENGINEERING_ROOM_1",
  ENGINEERING_ROOM_2 = "ENGINEERING_ROOM_2",
  ROOF_1 = "ROOF_1",
  ROOF_2 = "ROOF_2",
  LED_SEARCHLIGHT = "LED_SEARCHLIGHT",
  INFRARED_SEARCHLIGHT = "INFRARED_SEARCHLIGHT",
  FACADE_1 = "FACADE_1",
  FACADE_2 = "FACADE_2",
  FACADE_3 = "FACADE_3",
  FACADE_4 = "FACADE_4",
  FACADE_5 = "FACADE_5",
}

export enum LightingDeviceState {
  ON = "ON",
  OFF = "OFF",
  IN_STOCK = "IN_STOCK",
  DECOMMISSIONED = "DECOMMISSIONED",
}

export type LightingDeviceHistory = {
  readonly placeOfInstallation: string;
  readonly turnedOnAt: string | null;
  readonly turnedOffAt: string | null;
  readonly workedMs: number | null;
};

export type LightingDevice = {
  readonly id: string;
  readonly name: string;
  readonly brand: string;
  readonly power: string;
  readonly lumens: string;
  readonly lightTemperatureKelvin: number;
  readonly resourceMs: number;
  readonly price: string;
  readonly currency: string;
  readonly sellersWebsite: string;
  readonly images: string[];
  readonly placeOfInstallation: string;
  readonly state: LightingDeviceState;
  readonly history: LightingDeviceHistory[];
  readonly totalWorkedMs: number;
  readonly createdAt: string;
  readonly updatedAt: string;
};
