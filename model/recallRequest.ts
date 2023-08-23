/**
 * MeMaS DP APIs
 * This is the Data Plane client for MeMaS (Memory Management Service).  See https://github.com/memas-ai/MeMaS for more details.
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: max.yu@memas.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RecallRequest {
    'clue': string;
    /**
    * Full namespace name, where child namespaces are appended after their parents\' names with \'.\'
    */
    'namespacePathname': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clue",
            "baseName": "clue",
            "type": "string"
        },
        {
            "name": "namespacePathname",
            "baseName": "namespace_pathname",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RecallRequest.attributeTypeMap;
    }
}

