/**
 * MeMaS DP APIs
 * This is the Data Plane APIs for MeMaS (Memory Management Service).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: max.yu@memas.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Remember200Response {
    'success'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Remember200Response.attributeTypeMap;
    }
}

