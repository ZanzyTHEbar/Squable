/**
 * @description Enum for the different types of popovers
 */
export enum POPOVER_ID {
    GRIP = 'grip-popover',
    LIST = 'list-popover',
    TRACKER_MANAGER = 'tracker-manager-popover',
    SETTINGS_POPOVER = 'settings-popover',
}

/**
 * @description Enum for the different types of loaders
 */
export enum loaderType {
    MDNS_CONNECTING = 'MDNS_CONNECTING',
    REST_CLIENT = 'REST_CLIENT',
}

/**
 * @description Enum for the different types of notifications
 * @enum {string} ENotificationType
 * @property {string} ERROR - An Error notification
 * @property {string} SUCCESS - A Success notification
 * @property {string} INFO - An Info notification
 * @property {string} WARNING - A Warning notification
 * @property {string} DEFAULT - A Default notification
 */
export enum ENotificationType {
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    INFO = 'INFO',
    WARNING = 'WARNING',
    DEFAULT = 'DEFAULT',
}

/**
 * @description Enum for the different types of notifications actions
 * @enum {string}
 * @property {string} OS - The notification will be handled by the OS
 * @property {string} APP - The notification will be handled by the APP
 */
export enum ENotificationAction {
    OS = 'OS',
    APP = 'APP',
}
