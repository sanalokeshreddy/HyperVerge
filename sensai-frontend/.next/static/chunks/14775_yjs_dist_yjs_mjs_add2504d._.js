(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/yjs@13.6.27/node_modules/yjs/dist/yjs.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AbsolutePosition": ()=>AbsolutePosition,
    "AbstractConnector": ()=>AbstractConnector,
    "AbstractStruct": ()=>AbstractStruct,
    "AbstractType": ()=>AbstractType,
    "Array": ()=>YArray,
    "ContentAny": ()=>ContentAny,
    "ContentBinary": ()=>ContentBinary,
    "ContentDeleted": ()=>ContentDeleted,
    "ContentDoc": ()=>ContentDoc,
    "ContentEmbed": ()=>ContentEmbed,
    "ContentFormat": ()=>ContentFormat,
    "ContentJSON": ()=>ContentJSON,
    "ContentString": ()=>ContentString,
    "ContentType": ()=>ContentType,
    "Doc": ()=>Doc,
    "GC": ()=>GC,
    "ID": ()=>ID,
    "Item": ()=>Item,
    "Map": ()=>YMap,
    "PermanentUserData": ()=>PermanentUserData,
    "RelativePosition": ()=>RelativePosition,
    "Skip": ()=>Skip,
    "Snapshot": ()=>Snapshot,
    "Text": ()=>YText,
    "Transaction": ()=>Transaction,
    "UndoManager": ()=>UndoManager,
    "UpdateDecoderV1": ()=>UpdateDecoderV1,
    "UpdateDecoderV2": ()=>UpdateDecoderV2,
    "UpdateEncoderV1": ()=>UpdateEncoderV1,
    "UpdateEncoderV2": ()=>UpdateEncoderV2,
    "XmlElement": ()=>YXmlElement,
    "XmlFragment": ()=>YXmlFragment,
    "XmlHook": ()=>YXmlHook,
    "XmlText": ()=>YXmlText,
    "YArrayEvent": ()=>YArrayEvent,
    "YEvent": ()=>YEvent,
    "YMapEvent": ()=>YMapEvent,
    "YTextEvent": ()=>YTextEvent,
    "YXmlEvent": ()=>YXmlEvent,
    "applyUpdate": ()=>applyUpdate,
    "applyUpdateV2": ()=>applyUpdateV2,
    "cleanupYTextFormatting": ()=>cleanupYTextFormatting,
    "compareIDs": ()=>compareIDs,
    "compareRelativePositions": ()=>compareRelativePositions,
    "convertUpdateFormatV1ToV2": ()=>convertUpdateFormatV1ToV2,
    "convertUpdateFormatV2ToV1": ()=>convertUpdateFormatV2ToV1,
    "createAbsolutePositionFromRelativePosition": ()=>createAbsolutePositionFromRelativePosition,
    "createDeleteSet": ()=>createDeleteSet,
    "createDeleteSetFromStructStore": ()=>createDeleteSetFromStructStore,
    "createDocFromSnapshot": ()=>createDocFromSnapshot,
    "createID": ()=>createID,
    "createRelativePositionFromJSON": ()=>createRelativePositionFromJSON,
    "createRelativePositionFromTypeIndex": ()=>createRelativePositionFromTypeIndex,
    "createSnapshot": ()=>createSnapshot,
    "decodeRelativePosition": ()=>decodeRelativePosition,
    "decodeSnapshot": ()=>decodeSnapshot,
    "decodeSnapshotV2": ()=>decodeSnapshotV2,
    "decodeStateVector": ()=>decodeStateVector,
    "decodeUpdate": ()=>decodeUpdate,
    "decodeUpdateV2": ()=>decodeUpdateV2,
    "diffUpdate": ()=>diffUpdate,
    "diffUpdateV2": ()=>diffUpdateV2,
    "emptySnapshot": ()=>emptySnapshot,
    "encodeRelativePosition": ()=>encodeRelativePosition,
    "encodeSnapshot": ()=>encodeSnapshot,
    "encodeSnapshotV2": ()=>encodeSnapshotV2,
    "encodeStateAsUpdate": ()=>encodeStateAsUpdate,
    "encodeStateAsUpdateV2": ()=>encodeStateAsUpdateV2,
    "encodeStateVector": ()=>encodeStateVector,
    "encodeStateVectorFromUpdate": ()=>encodeStateVectorFromUpdate,
    "encodeStateVectorFromUpdateV2": ()=>encodeStateVectorFromUpdateV2,
    "equalDeleteSets": ()=>equalDeleteSets,
    "equalSnapshots": ()=>equalSnapshots,
    "findIndexSS": ()=>findIndexSS,
    "findRootTypeKey": ()=>findRootTypeKey,
    "getItem": ()=>getItem,
    "getItemCleanEnd": ()=>getItemCleanEnd,
    "getItemCleanStart": ()=>getItemCleanStart,
    "getState": ()=>getState,
    "getTypeChildren": ()=>getTypeChildren,
    "isDeleted": ()=>isDeleted,
    "isParentOf": ()=>isParentOf,
    "iterateDeletedStructs": ()=>iterateDeletedStructs,
    "logType": ()=>logType,
    "logUpdate": ()=>logUpdate,
    "logUpdateV2": ()=>logUpdateV2,
    "mergeDeleteSets": ()=>mergeDeleteSets,
    "mergeUpdates": ()=>mergeUpdates,
    "mergeUpdatesV2": ()=>mergeUpdatesV2,
    "obfuscateUpdate": ()=>obfuscateUpdate,
    "obfuscateUpdateV2": ()=>obfuscateUpdateV2,
    "parseUpdateMeta": ()=>parseUpdateMeta,
    "parseUpdateMetaV2": ()=>parseUpdateMetaV2,
    "readUpdate": ()=>readUpdate,
    "readUpdateV2": ()=>readUpdateV2,
    "relativePositionToJSON": ()=>relativePositionToJSON,
    "snapshot": ()=>snapshot,
    "snapshotContainsUpdate": ()=>snapshotContainsUpdate,
    "transact": ()=>transact,
    "tryGc": ()=>tryGc,
    "typeListToArraySnapshot": ()=>typeListToArraySnapshot,
    "typeMapGetAllSnapshot": ()=>typeMapGetAllSnapshot,
    "typeMapGetSnapshot": ()=>typeMapGetSnapshot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/decoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/binary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/function.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/logging.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/logging.common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lib0@0.2.114/node_modules/lib0/environment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * This is an abstract interface that all Connectors should implement to keep them interchangeable.
 *
 * @note This interface is experimental and it is not advised to actually inherit this class.
 *       It just serves as typing information.
 *
 * @extends {ObservableV2<any>}
 */ class AbstractConnector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableV2"] {
    /**
   * @param {Doc} ydoc
   * @param {any} awareness
   */ constructor(ydoc, awareness){
        super();
        this.doc = ydoc;
        this.awareness = awareness;
    }
}
class DeleteItem {
    /**
   * @param {number} clock
   * @param {number} len
   */ constructor(clock, len){
        /**
     * @type {number}
     */ this.clock = clock;
        /**
     * @type {number}
     */ this.len = len;
    }
}
/**
 * We no longer maintain a DeleteStore. DeleteSet is a temporary object that is created when needed.
 * - When created in a transaction, it must only be accessed after sorting, and merging
 *   - This DeleteSet is send to other clients
 * - We do not create a DeleteSet when we send a sync message. The DeleteSet message is created directly from StructStore
 * - We read a DeleteSet as part of a sync/update message. In this case the DeleteSet is already sorted and merged.
 */ class DeleteSet {
    constructor(){
        /**
     * @type {Map<number,Array<DeleteItem>>}
     */ this.clients = new Map();
    }
}
/**
 * Iterate over all structs that the DeleteSet gc's.
 *
 * @param {Transaction} transaction
 * @param {DeleteSet} ds
 * @param {function(GC|Item):void} f
 *
 * @function
 */ const iterateDeletedStructs = (transaction, ds, f)=>ds.clients.forEach((deletes, clientid)=>{
        const structs = transaction.doc.store.clients.get(clientid);
        if (structs != null) {
            const lastStruct = structs[structs.length - 1];
            const clockState = lastStruct.id.clock + lastStruct.length;
            for(let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]){
                iterateStructs(transaction, structs, del.clock, del.len, f);
            }
        }
    });
/**
 * @param {Array<DeleteItem>} dis
 * @param {number} clock
 * @return {number|null}
 *
 * @private
 * @function
 */ const findIndexDS = (dis, clock)=>{
    let left = 0;
    let right = dis.length - 1;
    while(left <= right){
        const midindex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"]((left + right) / 2);
        const mid = dis[midindex];
        const midclock = mid.clock;
        if (midclock <= clock) {
            if (clock < midclock + mid.len) {
                return midindex;
            }
            left = midindex + 1;
        } else {
            right = midindex - 1;
        }
    }
    return null;
};
/**
 * @param {DeleteSet} ds
 * @param {ID} id
 * @return {boolean}
 *
 * @private
 * @function
 */ const isDeleted = (ds, id)=>{
    const dis = ds.clients.get(id.client);
    return dis !== undefined && findIndexDS(dis, id.clock) !== null;
};
/**
 * @param {DeleteSet} ds
 *
 * @private
 * @function
 */ const sortAndMergeDeleteSet = (ds)=>{
    ds.clients.forEach((dels)=>{
        dels.sort((a, b)=>a.clock - b.clock);
        // merge items without filtering or splicing the array
        // i is the current pointer
        // j refers to the current insert position for the pointed item
        // try to merge dels[i] into dels[j-1] or set dels[j]=dels[i]
        let i, j;
        for(i = 1, j = 1; i < dels.length; i++){
            const left = dels[j - 1];
            const right = dels[i];
            if (left.clock + left.len >= right.clock) {
                left.len = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](left.len, right.clock + right.len - left.clock);
            } else {
                if (j < i) {
                    dels[j] = right;
                }
                j++;
            }
        }
        dels.length = j;
    });
};
/**
 * @param {Array<DeleteSet>} dss
 * @return {DeleteSet} A fresh DeleteSet
 */ const mergeDeleteSets = (dss)=>{
    const merged = new DeleteSet();
    for(let dssI = 0; dssI < dss.length; dssI++){
        dss[dssI].clients.forEach((delsLeft, client)=>{
            if (!merged.clients.has(client)) {
                // Write all missing keys from current ds and all following.
                // If merged already contains `client` current ds has already been added.
                /**
         * @type {Array<DeleteItem>}
         */ const dels = delsLeft.slice();
                for(let i = dssI + 1; i < dss.length; i++){
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendTo"](dels, dss[i].clients.get(client) || []);
                }
                merged.clients.set(client, dels);
            }
        });
    }
    sortAndMergeDeleteSet(merged);
    return merged;
};
/**
 * @param {DeleteSet} ds
 * @param {number} client
 * @param {number} clock
 * @param {number} length
 *
 * @private
 * @function
 */ const addToDeleteSet = (ds, client, clock, length)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](ds.clients, client, ()=>[]).push(new DeleteItem(clock, length));
};
const createDeleteSet = ()=>new DeleteSet();
/**
 * @param {StructStore} ss
 * @return {DeleteSet} Merged and sorted DeleteSet
 *
 * @private
 * @function
 */ const createDeleteSetFromStructStore = (ss)=>{
    const ds = createDeleteSet();
    ss.clients.forEach((structs, client)=>{
        /**
     * @type {Array<DeleteItem>}
     */ const dsitems = [];
        for(let i = 0; i < structs.length; i++){
            const struct = structs[i];
            if (struct.deleted) {
                const clock = struct.id.clock;
                let len = struct.length;
                if (i + 1 < structs.length) {
                    for(let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]){
                        len += next.length;
                    }
                }
                dsitems.push(new DeleteItem(clock, len));
            }
        }
        if (dsitems.length > 0) {
            ds.clients.set(client, dsitems);
        }
    });
    return ds;
};
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {DeleteSet} ds
 *
 * @private
 * @function
 */ const writeDeleteSet = (encoder, ds)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, ds.clients.size);
    // Ensure that the delete set is written in a deterministic order
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](ds.clients.entries()).sort((a, b)=>b[0] - a[0]).forEach((param)=>{
        let [client, dsitems] = param;
        encoder.resetDsCurVal();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, client);
        const len = dsitems.length;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, len);
        for(let i = 0; i < len; i++){
            const item = dsitems[i];
            encoder.writeDsClock(item.clock);
            encoder.writeDsLen(item.len);
        }
    });
};
/**
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @return {DeleteSet}
 *
 * @private
 * @function
 */ const readDeleteSet = (decoder)=>{
    const ds = new DeleteSet();
    const numClients = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
    for(let i = 0; i < numClients; i++){
        decoder.resetDsCurVal();
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        const numberOfDeletes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        if (numberOfDeletes > 0) {
            const dsField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](ds.clients, client, ()=>[]);
            for(let i = 0; i < numberOfDeletes; i++){
                dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
            }
        }
    }
    return ds;
};
/**
 * @todo YDecoder also contains references to String and other Decoders. Would make sense to exchange YDecoder.toUint8Array for YDecoder.DsToUint8Array()..
 */ /**
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @return {Uint8Array|null} Returns a v2 update containing all deletes that couldn't be applied yet; or null if all deletes were applied successfully.
 *
 * @private
 * @function
 */ const readAndApplyDeleteSet = (decoder, transaction, store)=>{
    const unappliedDS = new DeleteSet();
    const numClients = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
    for(let i = 0; i < numClients; i++){
        decoder.resetDsCurVal();
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        const numberOfDeletes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        const structs = store.clients.get(client) || [];
        const state = getState(store, client);
        for(let i = 0; i < numberOfDeletes; i++){
            const clock = decoder.readDsClock();
            const clockEnd = clock + decoder.readDsLen();
            if (clock < state) {
                if (state < clockEnd) {
                    addToDeleteSet(unappliedDS, client, state, clockEnd - state);
                }
                let index = findIndexSS(structs, clock);
                /**
         * We can ignore the case of GC and Delete structs, because we are going to skip them
         * @type {Item}
         */ // @ts-ignore
                let struct = structs[index];
                // split the first item if necessary
                if (!struct.deleted && struct.id.clock < clock) {
                    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
                    index++; // increase we now want to use the next struct
                }
                while(index < structs.length){
                    // @ts-ignore
                    struct = structs[index++];
                    if (struct.id.clock < clockEnd) {
                        if (!struct.deleted) {
                            if (clockEnd < struct.id.clock + struct.length) {
                                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
                            }
                            struct.delete(transaction);
                        }
                    } else {
                        break;
                    }
                }
            } else {
                addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
            }
        }
    }
    if (unappliedDS.clients.size > 0) {
        const ds = new UpdateEncoderV2();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](ds.restEncoder, 0); // encode 0 structs
        writeDeleteSet(ds, unappliedDS);
        return ds.toUint8Array();
    }
    return null;
};
/**
 * @param {DeleteSet} ds1
 * @param {DeleteSet} ds2
 */ const equalDeleteSets = (ds1, ds2)=>{
    if (ds1.clients.size !== ds2.clients.size) return false;
    for (const [client, deleteItems1] of ds1.clients.entries()){
        const deleteItems2 = ds2.clients.get(client);
        if (deleteItems2 === undefined || deleteItems1.length !== deleteItems2.length) return false;
        for(let i = 0; i < deleteItems1.length; i++){
            const di1 = deleteItems1[i];
            const di2 = deleteItems2[i];
            if (di1.clock !== di2.clock || di1.len !== di2.len) {
                return false;
            }
        }
    }
    return true;
};
/**
 * @module Y
 */ const generateNewClientId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uint32"];
/**
 * @typedef {Object} DocOpts
 * @property {boolean} [DocOpts.gc=true] Disable garbage collection (default: gc=true)
 * @property {function(Item):boolean} [DocOpts.gcFilter] Will be called before an Item is garbage collected. Return false to keep the Item.
 * @property {string} [DocOpts.guid] Define a globally unique identifier for this document
 * @property {string | null} [DocOpts.collectionid] Associate this document with a collection. This only plays a role if your provider has a concept of collection.
 * @property {any} [DocOpts.meta] Any kind of meta information you want to associate with this document. If this is a subdocument, remote peers will store the meta information as well.
 * @property {boolean} [DocOpts.autoLoad] If a subdocument, automatically load document. If this is a subdocument, remote peers will load the document as well automatically.
 * @property {boolean} [DocOpts.shouldLoad] Whether the document should be synced by the provider now. This is toggled to true when you call ydoc.load()
 */ /**
 * @typedef {Object} DocEvents
 * @property {function(Doc):void} DocEvents.destroy
 * @property {function(Doc):void} DocEvents.load
 * @property {function(boolean, Doc):void} DocEvents.sync
 * @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.update
 * @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.updateV2
 * @property {function(Doc):void} DocEvents.beforeAllTransactions
 * @property {function(Transaction, Doc):void} DocEvents.beforeTransaction
 * @property {function(Transaction, Doc):void} DocEvents.beforeObserverCalls
 * @property {function(Transaction, Doc):void} DocEvents.afterTransaction
 * @property {function(Transaction, Doc):void} DocEvents.afterTransactionCleanup
 * @property {function(Doc, Array<Transaction>):void} DocEvents.afterAllTransactions
 * @property {function({ loaded: Set<Doc>, added: Set<Doc>, removed: Set<Doc> }, Doc, Transaction):void} DocEvents.subdocs
 */ /**
 * A Yjs instance handles the state of shared data.
 * @extends ObservableV2<DocEvents>
 */ class Doc extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableV2"] {
    /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */ load() {
        const item = this._item;
        if (item !== null && !this.shouldLoad) {
            transact(/** @type {any} */ item.parent.doc, (transaction)=>{
                transaction.subdocsLoaded.add(this);
            }, null, true);
        }
        this.shouldLoad = true;
    }
    getSubdocs() {
        return this.subdocs;
    }
    getSubdocGuids() {
        return new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](this.subdocs).map((doc)=>doc.guid));
    }
    /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */ transact(f) {
        let origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return transact(this, f, origin);
    }
    /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */ get(name) {
        let TypeConstructor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : AbstractType;
        const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](this.share, name, ()=>{
            // @ts-ignore
            const t = new TypeConstructor();
            t._integrate(this, null);
            return t;
        });
        const Constr = type.constructor;
        if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
            if (Constr === AbstractType) {
                // @ts-ignore
                const t = new TypeConstructor();
                t._map = type._map;
                type._map.forEach(/** @param {Item?} n */ (n)=>{
                    for(; n !== null; n = n.left){
                        // @ts-ignore
                        n.parent = t;
                    }
                });
                t._start = type._start;
                for(let n = t._start; n !== null; n = n.right){
                    n.parent = t;
                }
                t._length = type._length;
                this.share.set(name, t);
                t._integrate(this, null);
                return t;
            } else {
                throw new Error("Type with the name ".concat(name, " has already been defined with a different constructor"));
            }
        }
        return type;
    }
    /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */ getArray() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return this.get(name, YArray);
    }
    /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */ getText() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return this.get(name, YText);
    }
    /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */ getMap() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return this.get(name, YMap);
    }
    /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */ getXmlElement() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return this.get(name, YXmlElement);
    }
    /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */ getXmlFragment() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return this.get(name, YXmlFragment);
    }
    /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */ toJSON() {
        /**
     * @type {Object<string, any>}
     */ const doc = {};
        this.share.forEach((value, key)=>{
            doc[key] = value.toJSON();
        });
        return doc;
    }
    /**
   * Emit `destroy` event and unregister all event handlers.
   */ destroy() {
        this.isDestroyed = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](this.subdocs).forEach((subdoc)=>subdoc.destroy());
        const item = this._item;
        if (item !== null) {
            this._item = null;
            const content = item.content;
            content.doc = new Doc({
                guid: this.guid,
                ...content.opts,
                shouldLoad: false
            });
            content.doc._item = item;
            transact(/** @type {any} */ item.parent.doc, (transaction)=>{
                const doc = content.doc;
                if (!item.deleted) {
                    transaction.subdocsAdded.add(doc);
                }
                transaction.subdocsRemoved.add(this);
            }, null, true);
        }
        // @ts-ignore
        this.emit('destroyed', [
            true
        ]); // DEPRECATED!
        this.emit('destroy', [
            this
        ]);
        super.destroy();
    }
    /**
   * @param {DocOpts} opts configuration
   */ constructor({ guid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidv4"](), collectionid = null, gc = true, gcFilter = ()=>true, meta = null, autoLoad = false, shouldLoad = true } = {}){
        super();
        this.gc = gc;
        this.gcFilter = gcFilter;
        this.clientID = generateNewClientId();
        this.guid = guid;
        this.collectionid = collectionid;
        /**
     * @type {Map<string, AbstractType<YEvent<any>>>}
     */ this.share = new Map();
        this.store = new StructStore();
        /**
     * @type {Transaction | null}
     */ this._transaction = null;
        /**
     * @type {Array<Transaction>}
     */ this._transactionCleanups = [];
        /**
     * @type {Set<Doc>}
     */ this.subdocs = new Set();
        /**
     * If this document is a subdocument - a document integrated into another document - then _item is defined.
     * @type {Item?}
     */ this._item = null;
        this.shouldLoad = shouldLoad;
        this.autoLoad = autoLoad;
        this.meta = meta;
        /**
     * This is set to true when the persistence provider loaded the document from the database or when the `sync` event fires.
     * Note that not all providers implement this feature. Provider authors are encouraged to fire the `load` event when the doc content is loaded from the database.
     *
     * @type {boolean}
     */ this.isLoaded = false;
        /**
     * This is set to true when the connection provider has successfully synced with a backend.
     * Note that when using peer-to-peer providers this event may not provide very useful.
     * Also note that not all providers implement this feature. Provider authors are encouraged to fire
     * the `sync` event when the doc has been synced (with `true` as a parameter) or if connection is
     * lost (with false as a parameter).
     */ this.isSynced = false;
        this.isDestroyed = false;
        /**
     * Promise that resolves once the document has been loaded from a persistence provider.
     */ this.whenLoaded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]((resolve)=>{
            this.on('load', ()=>{
                this.isLoaded = true;
                resolve(this);
            });
        });
        const provideSyncedPromise = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]((resolve)=>{
                /**
       * @param {boolean} isSynced
       */ const eventHandler = (isSynced)=>{
                    if (isSynced === undefined || isSynced === true) {
                        this.off('sync', eventHandler);
                        resolve();
                    }
                };
                this.on('sync', eventHandler);
            });
        this.on('sync', (isSynced)=>{
            if (isSynced === false && this.isSynced) {
                this.whenSynced = provideSyncedPromise();
            }
            this.isSynced = isSynced === undefined || isSynced === true;
            if (this.isSynced && !this.isLoaded) {
                this.emit('load', [
                    this
                ]);
            }
        });
        /**
     * Promise that resolves once the document has been synced with a backend.
     * This promise is recreated when the connection is lost.
     * Note the documentation about the `isSynced` property.
     */ this.whenSynced = provideSyncedPromise();
    }
}
class DSDecoderV1 {
    resetDsCurVal() {
    // nop
    }
    /**
   * @return {number}
   */ readDsClock() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
    }
    /**
   * @return {number}
   */ readDsLen() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
    }
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        this.restDecoder = decoder;
    }
}
class UpdateDecoderV1 extends DSDecoderV1 {
    /**
   * @return {ID}
   */ readLeftID() {
        return createID(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder));
    }
    /**
   * @return {ID}
   */ readRightID() {
        return createID(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder));
    }
    /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */ readClient() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readInfo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readUint8"](this.restDecoder);
    }
    /**
   * @return {string}
   */ readString() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarString"](this.restDecoder);
    }
    /**
   * @return {boolean} isKey
   */ readParentInfo() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder) === 1;
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readTypeRef() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */ readLen() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
    }
    /**
   * @return {any}
   */ readAny() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readAny"](this.restDecoder);
    }
    /**
   * @return {Uint8Array}
   */ readBuf() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyUint8Array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](this.restDecoder));
    }
    /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */ readJSON() {
        return JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarString"](this.restDecoder));
    }
    /**
   * @return {string}
   */ readKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarString"](this.restDecoder);
    }
}
class DSDecoderV2 {
    resetDsCurVal() {
        this.dsCurrVal = 0;
    }
    /**
   * @return {number}
   */ readDsClock() {
        this.dsCurrVal += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder);
        return this.dsCurrVal;
    }
    /**
   * @return {number}
   */ readDsLen() {
        const diff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](this.restDecoder) + 1;
        this.dsCurrVal += diff;
        return diff;
    }
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        /**
     * @private
     */ this.dsCurrVal = 0;
        this.restDecoder = decoder;
    }
}
class UpdateDecoderV2 extends DSDecoderV2 {
    /**
   * @return {ID}
   */ readLeftID() {
        return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
    }
    /**
   * @return {ID}
   */ readRightID() {
        return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
    }
    /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */ readClient() {
        return this.clientDecoder.read();
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readInfo() {
        return this.infoDecoder.read();
    }
    /**
   * @return {string}
   */ readString() {
        return this.stringDecoder.read();
    }
    /**
   * @return {boolean}
   */ readParentInfo() {
        return this.parentInfoDecoder.read() === 1;
    }
    /**
   * @return {number} An unsigned 8-bit integer
   */ readTypeRef() {
        return this.typeRefDecoder.read();
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */ readLen() {
        return this.lenDecoder.read();
    }
    /**
   * @return {any}
   */ readAny() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readAny"](this.restDecoder);
    }
    /**
   * @return {Uint8Array}
   */ readBuf() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](this.restDecoder);
    }
    /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */ readJSON() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readAny"](this.restDecoder);
    }
    /**
   * @return {string}
   */ readKey() {
        const keyClock = this.keyClockDecoder.read();
        if (keyClock < this.keys.length) {
            return this.keys[keyClock];
        } else {
            const key = this.stringDecoder.read();
            this.keys.push(key);
            return key;
        }
    }
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        super(decoder);
        /**
     * List of cached keys. If the keys[id] does not exist, we read a new key
     * from stringEncoder and push it to keys.
     *
     * @type {Array<string>}
     */ this.keys = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder); // read feature flag - currently unused
        this.keyClockDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.clientDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.leftClockDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.rightClockDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.infoDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readUint8"]);
        this.stringDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.parentInfoDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readUint8"]);
        this.typeRefDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
        this.lenDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleDecoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint8Array"](decoder));
    }
}
class DSEncoderV1 {
    toUint8Array() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](this.restEncoder);
    }
    resetDsCurVal() {
    // nop
    }
    /**
   * @param {number} clock
   */ writeDsClock(clock) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, clock);
    }
    /**
   * @param {number} len
   */ writeDsLen(len) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, len);
    }
    constructor(){
        this.restEncoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"]();
    }
}
class UpdateEncoderV1 extends DSEncoderV1 {
    /**
   * @param {ID} id
   */ writeLeftID(id) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, id.client);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, id.clock);
    }
    /**
   * @param {ID} id
   */ writeRightID(id) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, id.client);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, id.clock);
    }
    /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */ writeClient(client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, client);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeInfo(info) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8"](this.restEncoder, info);
    }
    /**
   * @param {string} s
   */ writeString(s) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarString"](this.restEncoder, s);
    }
    /**
   * @param {boolean} isYKey
   */ writeParentInfo(isYKey) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, isYKey ? 1 : 0);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeTypeRef(info) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, info);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */ writeLen(len) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, len);
    }
    /**
   * @param {any} any
   */ writeAny(any) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeAny"](this.restEncoder, any);
    }
    /**
   * @param {Uint8Array} buf
   */ writeBuf(buf) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](this.restEncoder, buf);
    }
    /**
   * @param {any} embed
   */ writeJSON(embed) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarString"](this.restEncoder, JSON.stringify(embed));
    }
    /**
   * @param {string} key
   */ writeKey(key) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarString"](this.restEncoder, key);
    }
}
class DSEncoderV2 {
    toUint8Array() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](this.restEncoder);
    }
    resetDsCurVal() {
        this.dsCurrVal = 0;
    }
    /**
   * @param {number} clock
   */ writeDsClock(clock) {
        const diff = clock - this.dsCurrVal;
        this.dsCurrVal = clock;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, diff);
    }
    /**
   * @param {number} len
   */ writeDsLen(len) {
        if (len === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](this.restEncoder, len - 1);
        this.dsCurrVal += len;
    }
    constructor(){
        this.restEncoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"](); // encodes all the rest / non-optimized
        this.dsCurrVal = 0;
    }
}
class UpdateEncoderV2 extends DSEncoderV2 {
    toUint8Array() {
        const encoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder, 0); // this is a feature flag that we might use in the future
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.keyClockEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.clientEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.leftClockEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.rightClockEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](this.infoEncoder));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.stringEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](this.parentInfoEncoder));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.typeRefEncoder.toUint8Array());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](encoder, this.lenEncoder.toUint8Array());
        // @note The rest encoder is appended! (note the missing var)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8Array"](encoder, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](this.restEncoder));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](encoder);
    }
    /**
   * @param {ID} id
   */ writeLeftID(id) {
        this.clientEncoder.write(id.client);
        this.leftClockEncoder.write(id.clock);
    }
    /**
   * @param {ID} id
   */ writeRightID(id) {
        this.clientEncoder.write(id.client);
        this.rightClockEncoder.write(id.clock);
    }
    /**
   * @param {number} client
   */ writeClient(client) {
        this.clientEncoder.write(client);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeInfo(info) {
        this.infoEncoder.write(info);
    }
    /**
   * @param {string} s
   */ writeString(s) {
        this.stringEncoder.write(s);
    }
    /**
   * @param {boolean} isYKey
   */ writeParentInfo(isYKey) {
        this.parentInfoEncoder.write(isYKey ? 1 : 0);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeTypeRef(info) {
        this.typeRefEncoder.write(info);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */ writeLen(len) {
        this.lenEncoder.write(len);
    }
    /**
   * @param {any} any
   */ writeAny(any) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeAny"](this.restEncoder, any);
    }
    /**
   * @param {Uint8Array} buf
   */ writeBuf(buf) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint8Array"](this.restEncoder, buf);
    }
    /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */ writeJSON(embed) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeAny"](this.restEncoder, embed);
    }
    /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */ writeKey(key) {
        const clock = this.keyMap.get(key);
        if (clock === undefined) {
            /**
       * @todo uncomment to introduce this feature finally
       *
       * Background. The ContentFormat object was always encoded using writeKey, but the decoder used to use readString.
       * Furthermore, I forgot to set the keyclock. So everything was working fine.
       *
       * However, this feature here is basically useless as it is not being used (it actually only consumes extra memory).
       *
       * I don't know yet how to reintroduce this feature..
       *
       * Older clients won't be able to read updates when we reintroduce this feature. So this should probably be done using a flag.
       *
       */ // this.keyMap.set(key, this.keyClock)
            this.keyClockEncoder.write(this.keyClock++);
            this.stringEncoder.write(key);
        } else {
            this.keyClockEncoder.write(clock);
        }
    }
    constructor(){
        super();
        /**
     * @type {Map<string,number>}
     */ this.keyMap = new Map();
        /**
     * Refers to the next unique key-identifier to me used.
     * See writeKey method for more information.
     *
     * @type {number}
     */ this.keyClock = 0;
        this.keyClockEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleEncoder"]();
        this.clientEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleEncoder"]();
        this.leftClockEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleEncoder"]();
        this.rightClockEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntDiffOptRleEncoder"]();
        this.infoEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RleEncoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8"]);
        this.stringEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringEncoder"]();
        this.parentInfoEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RleEncoder"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8"]);
        this.typeRefEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleEncoder"]();
        this.lenEncoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UintOptRleEncoder"]();
    }
}
/**
 * @module encoding
 */ /*
 * We use the first five bits in the info flag for determining the type of the struct.
 *
 * 0: GC
 * 1: Item with Deleted content
 * 2: Item with JSON content
 * 3: Item with Binary content
 * 4: Item with String content
 * 5: Item with Embed content (for richtext content)
 * 6: Item with Format content (a formatting marker for richtext content)
 * 7: Item with Type
 */ /**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Array<GC|Item>} structs All structs by `client`
 * @param {number} client
 * @param {number} clock write structs starting with `ID(client,clock)`
 *
 * @function
 */ const writeStructs = (encoder, structs, client, clock)=>{
    // write first id
    clock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](clock, structs[0].id.clock); // make sure the first id exists
    const startNewStructs = findIndexSS(structs, clock);
    // write # encoded structs
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, structs.length - startNewStructs);
    encoder.writeClient(client);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, clock);
    const firstStruct = structs[startNewStructs];
    // write first struct with an offset
    firstStruct.write(encoder, clock - firstStruct.id.clock);
    for(let i = startNewStructs + 1; i < structs.length; i++){
        structs[i].write(encoder, 0);
    }
};
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {StructStore} store
 * @param {Map<number,number>} _sm
 *
 * @private
 * @function
 */ const writeClientsStructs = (encoder, store, _sm)=>{
    // we filter all valid _sm entries into sm
    const sm = new Map();
    _sm.forEach((clock, client)=>{
        // only write if new structs are available
        if (getState(store, client) > clock) {
            sm.set(client, clock);
        }
    });
    getStateVector(store).forEach((_clock, client)=>{
        if (!_sm.has(client)) {
            sm.set(client, 0);
        }
    });
    // write # states that were updated
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, sm.size);
    // Write items with higher client ids first
    // This heavily improves the conflict algorithm.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](sm.entries()).sort((a, b)=>b[0] - a[0]).forEach((param)=>{
        let [client, clock] = param;
        writeStructs(encoder, store.clients.get(client), client, clock);
    });
};
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder The decoder object to read data from.
 * @param {Doc} doc
 * @return {Map<number, { i: number, refs: Array<Item | GC> }>}
 *
 * @private
 * @function
 */ const readClientsStructRefs = (decoder, doc)=>{
    /**
   * @type {Map<number, { i: number, refs: Array<Item | GC> }>}
   */ const clientRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    const numOfStateUpdates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
    for(let i = 0; i < numOfStateUpdates; i++){
        const numberOfStructs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        /**
     * @type {Array<GC|Item>}
     */ const refs = new Array(numberOfStructs);
        const client = decoder.readClient();
        let clock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        // const start = performance.now()
        clientRefs.set(client, {
            i: 0,
            refs
        });
        for(let i = 0; i < numberOfStructs; i++){
            const info = decoder.readInfo();
            switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS5"] & info){
                case 0:
                    {
                        const len = decoder.readLen();
                        refs[i] = new GC(createID(client, clock), len);
                        clock += len;
                        break;
                    }
                case 10:
                    {
                        // @todo we could reduce the amount of checks by adding Skip struct to clientRefs so we know that something is missing.
                        const len = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
                        refs[i] = new Skip(createID(client, clock), len);
                        clock += len;
                        break;
                    }
                default:
                    {
                        /**
           * The optimized implementation doesn't use any variables because inlining variables is faster.
           * Below a non-optimized version is shown that implements the basic algorithm with
           * a few comments
           */ const cantCopyParentInfo = (info & (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"] | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"])) === 0;
                        // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
                        // and we read the next string as parentYKey.
                        // It indicates how we store/retrieve parent from `y.share`
                        // @type {string|null}
                        const struct = new Item(createID(client, clock), null, (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"] ? decoder.readLeftID() : null, null, (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"] ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? doc.get(decoder.readString()) : decoder.readLeftID() : null, cantCopyParentInfo && (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT6"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT6"] ? decoder.readString() : null, readItemContent(decoder, info) // item content
                        );
                        /* A non-optimized implementation of the above algorithm:

          // The item that was originally to the left of this item.
          const origin = (info & binary.BIT8) === binary.BIT8 ? decoder.readLeftID() : null
          // The item that was originally to the right of this item.
          const rightOrigin = (info & binary.BIT7) === binary.BIT7 ? decoder.readRightID() : null
          const cantCopyParentInfo = (info & (binary.BIT7 | binary.BIT8)) === 0
          const hasParentYKey = cantCopyParentInfo ? decoder.readParentInfo() : false
          // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
          // and we read the next string as parentYKey.
          // It indicates how we store/retrieve parent from `y.share`
          // @type {string|null}
          const parentYKey = cantCopyParentInfo && hasParentYKey ? decoder.readString() : null

          const struct = new Item(
            createID(client, clock),
            null, // left
            origin, // origin
            null, // right
            rightOrigin, // right origin
            cantCopyParentInfo && !hasParentYKey ? decoder.readLeftID() : (parentYKey !== null ? doc.get(parentYKey) : null), // parent
            cantCopyParentInfo && (info & binary.BIT6) === binary.BIT6 ? decoder.readString() : null, // parentSub
            readItemContent(decoder, info) // item content
          )
          */ refs[i] = struct;
                        clock += struct.length;
                    }
            }
        }
    // console.log('time to read: ', performance.now() - start) // @todo remove
    }
    return clientRefs;
};
/**
 * Resume computing structs generated by struct readers.
 *
 * While there is something to do, we integrate structs in this order
 * 1. top element on stack, if stack is not empty
 * 2. next element from current struct reader (if empty, use next struct reader)
 *
 * If struct causally depends on another struct (ref.missing), we put next reader of
 * `ref.id.client` on top of stack.
 *
 * At some point we find a struct that has no causal dependencies,
 * then we start emptying the stack.
 *
 * It is not possible to have circles: i.e. struct1 (from client1) depends on struct2 (from client2)
 * depends on struct3 (from client1). Therefore the max stack size is equal to `structReaders.length`.
 *
 * This method is implemented in a way so that we can resume computation if this update
 * causally depends on another update.
 *
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @param {Map<number, { i: number, refs: (GC | Item)[] }>} clientsStructRefs
 * @return { null | { update: Uint8Array, missing: Map<number,number> } }
 *
 * @private
 * @function
 */ const integrateStructs = (transaction, store, clientsStructRefs)=>{
    /**
   * @type {Array<Item | GC>}
   */ const stack = [];
    // sort them so that we take the higher id first, in case of conflicts the lower id will probably not conflict with the id from the higher user.
    let clientsStructRefsIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](clientsStructRefs.keys()).sort((a, b)=>a - b);
    if (clientsStructRefsIds.length === 0) {
        return null;
    }
    const getNextStructTarget = ()=>{
        if (clientsStructRefsIds.length === 0) {
            return null;
        }
        let nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
        while(nextStructsTarget.refs.length === nextStructsTarget.i){
            clientsStructRefsIds.pop();
            if (clientsStructRefsIds.length > 0) {
                nextStructsTarget = clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
            } else {
                return null;
            }
        }
        return nextStructsTarget;
    };
    let curStructsTarget = getNextStructTarget();
    if (curStructsTarget === null) {
        return null;
    }
    /**
   * @type {StructStore}
   */ const restStructs = new StructStore();
    const missingSV = new Map();
    /**
   * @param {number} client
   * @param {number} clock
   */ const updateMissingSv = (client, clock)=>{
        const mclock = missingSV.get(client);
        if (mclock == null || mclock > clock) {
            missingSV.set(client, clock);
        }
    };
    /**
   * @type {GC|Item}
   */ let stackHead = /** @type {any} */ curStructsTarget.refs[/** @type {any} */ curStructsTarget.i++];
    // caching the state because it is used very often
    const state = new Map();
    const addStackToRestSS = ()=>{
        for (const item of stack){
            const client = item.id.client;
            const inapplicableItems = clientsStructRefs.get(client);
            if (inapplicableItems) {
                // decrement because we weren't able to apply previous operation
                inapplicableItems.i--;
                restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
                clientsStructRefs.delete(client);
                inapplicableItems.i = 0;
                inapplicableItems.refs = [];
            } else {
                // item was the last item on clientsStructRefs and the field was already cleared. Add item to restStructs and continue
                restStructs.clients.set(client, [
                    item
                ]);
            }
            // remove client from clientsStructRefsIds to prevent users from applying the same update again
            clientsStructRefsIds = clientsStructRefsIds.filter((c)=>c !== client);
        }
        stack.length = 0;
    };
    // iterate over all struct readers until we are done
    while(true){
        if (stackHead.constructor !== Skip) {
            const localClock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](state, stackHead.id.client, ()=>getState(store, stackHead.id.client));
            const offset = localClock - stackHead.id.clock;
            if (offset < 0) {
                // update from the same client is missing
                stack.push(stackHead);
                updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
                // hid a dead wall, add all items from stack to restSS
                addStackToRestSS();
            } else {
                const missing = stackHead.getMissing(transaction, store);
                if (missing !== null) {
                    stack.push(stackHead);
                    // get the struct reader that has the missing struct
                    /**
           * @type {{ refs: Array<GC|Item>, i: number }}
           */ const structRefs = clientsStructRefs.get(missing) || {
                        refs: [],
                        i: 0
                    };
                    if (structRefs.refs.length === structRefs.i) {
                        // This update message causally depends on another update message that doesn't exist yet
                        updateMissingSv(missing, getState(store, missing));
                        addStackToRestSS();
                    } else {
                        stackHead = structRefs.refs[structRefs.i++];
                        continue;
                    }
                } else if (offset === 0 || offset < stackHead.length) {
                    // all fine, apply the stackhead
                    stackHead.integrate(transaction, offset);
                    state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
                }
            }
        }
        // iterate to next stackHead
        if (stack.length > 0) {
            stackHead = stack.pop();
        } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
            stackHead = curStructsTarget.refs[curStructsTarget.i++];
        } else {
            curStructsTarget = getNextStructTarget();
            if (curStructsTarget === null) {
                break;
            } else {
                stackHead = curStructsTarget.refs[curStructsTarget.i++];
            }
        }
    }
    if (restStructs.clients.size > 0) {
        const encoder = new UpdateEncoderV2();
        writeClientsStructs(encoder, restStructs, new Map());
        // write empty deleteset
        // writeDeleteSet(encoder, new DeleteSet())
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, 0); // => no need for an extra function call, just write 0 deletes
        return {
            missing: missingSV,
            update: encoder.toUint8Array()
        };
    }
    return null;
};
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Transaction} transaction
 *
 * @private
 * @function
 */ const writeStructsFromTransaction = (encoder, transaction)=>writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
/**
 * Read and apply a document update.
 *
 * This function has the same effect as `applyUpdate` but accepts a decoder.
 *
 * @param {decoding.Decoder} decoder
 * @param {Doc} ydoc
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 * @param {UpdateDecoderV1 | UpdateDecoderV2} [structDecoder]
 *
 * @function
 */ const readUpdateV2 = function(decoder, ydoc, transactionOrigin) {
    let structDecoder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new UpdateDecoderV2(decoder);
    return transact(ydoc, (transaction)=>{
        // force that transaction.local is set to non-local
        transaction.local = false;
        let retry = false;
        const doc = transaction.doc;
        const store = doc.store;
        // let start = performance.now()
        const ss = readClientsStructRefs(structDecoder, doc);
        // console.log('time to read structs: ', performance.now() - start) // @todo remove
        // start = performance.now()
        // console.log('time to merge: ', performance.now() - start) // @todo remove
        // start = performance.now()
        const restStructs = integrateStructs(transaction, store, ss);
        const pending = store.pendingStructs;
        if (pending) {
            // check if we can apply something
            for (const [client, clock] of pending.missing){
                if (clock < getState(store, client)) {
                    retry = true;
                    break;
                }
            }
            if (restStructs) {
                // merge restStructs into store.pending
                for (const [client, clock] of restStructs.missing){
                    const mclock = pending.missing.get(client);
                    if (mclock == null || mclock > clock) {
                        pending.missing.set(client, clock);
                    }
                }
                pending.update = mergeUpdatesV2([
                    pending.update,
                    restStructs.update
                ]);
            }
        } else {
            store.pendingStructs = restStructs;
        }
        // console.log('time to integrate: ', performance.now() - start) // @todo remove
        // start = performance.now()
        const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
        if (store.pendingDs) {
            // @todo we could make a lower-bound state-vector check as we do above
            const pendingDSUpdate = new UpdateDecoderV2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](store.pendingDs));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](pendingDSUpdate.restDecoder); // read 0 structs, because we only encode deletes in pendingdsupdate
            const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
            if (dsRest && dsRest2) {
                // case 1: ds1 != null && ds2 != null
                store.pendingDs = mergeUpdatesV2([
                    dsRest,
                    dsRest2
                ]);
            } else {
                // case 2: ds1 != null
                // case 3: ds2 != null
                // case 4: ds1 == null && ds2 == null
                store.pendingDs = dsRest || dsRest2;
            }
        } else {
            // Either dsRest == null && pendingDs == null OR dsRest != null
            store.pendingDs = dsRest;
        }
        // console.log('time to cleanup: ', performance.now() - start) // @todo remove
        // start = performance.now()
        // console.log('time to resume delete readers: ', performance.now() - start) // @todo remove
        // start = performance.now()
        if (retry) {
            const update = /** @type {{update: Uint8Array}} */ store.pendingStructs.update;
            store.pendingStructs = null;
            applyUpdateV2(transaction.doc, update);
        }
    }, transactionOrigin, false);
};
/**
 * Read and apply a document update.
 *
 * This function has the same effect as `applyUpdate` but accepts a decoder.
 *
 * @param {decoding.Decoder} decoder
 * @param {Doc} ydoc
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 *
 * @function
 */ const readUpdate = (decoder, ydoc, transactionOrigin)=>readUpdateV2(decoder, ydoc, transactionOrigin, new UpdateDecoderV1(decoder));
/**
 * Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
 *
 * This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
 *
 * @param {Doc} ydoc
 * @param {Uint8Array} update
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 *
 * @function
 */ const applyUpdateV2 = function(ydoc, update, transactionOrigin) {
    let YDecoder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : UpdateDecoderV2;
    const decoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update);
    readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
/**
 * Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
 *
 * This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
 *
 * @param {Doc} ydoc
 * @param {Uint8Array} update
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 *
 * @function
 */ const applyUpdate = (ydoc, update, transactionOrigin)=>applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
/**
 * Write all the document as a single update message. If you specify the state of the remote client (`targetStateVector`) it will
 * only write the operations that are missing.
 *
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Doc} doc
 * @param {Map<number,number>} [targetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 *
 * @function
 */ const writeStateAsUpdate = function(encoder, doc) {
    let targetStateVector = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Map();
    writeClientsStructs(encoder, doc.store, targetStateVector);
    writeDeleteSet(encoder, createDeleteSetFromStructStore(doc.store));
};
/**
 * Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
 * only write the operations that are missing.
 *
 * Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
 *
 * @param {Doc} doc
 * @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 * @param {UpdateEncoderV1 | UpdateEncoderV2} [encoder]
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateAsUpdateV2 = function(doc) {
    let encodedTargetStateVector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Uint8Array([
        0
    ]), encoder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new UpdateEncoderV2();
    const targetStateVector = decodeStateVector(encodedTargetStateVector);
    writeStateAsUpdate(encoder, doc, targetStateVector);
    const updates = [
        encoder.toUint8Array()
    ];
    // also add the pending updates (if there are any)
    if (doc.store.pendingDs) {
        updates.push(doc.store.pendingDs);
    }
    if (doc.store.pendingStructs) {
        updates.push(diffUpdateV2(doc.store.pendingStructs.update, encodedTargetStateVector));
    }
    if (updates.length > 1) {
        if (encoder.constructor === UpdateEncoderV1) {
            return mergeUpdates(updates.map((update, i)=>i === 0 ? update : convertUpdateFormatV2ToV1(update)));
        } else if (encoder.constructor === UpdateEncoderV2) {
            return mergeUpdatesV2(updates);
        }
    }
    return updates[0];
};
/**
 * Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
 * only write the operations that are missing.
 *
 * Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
 *
 * @param {Doc} doc
 * @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateAsUpdate = (doc, encodedTargetStateVector)=>encodeStateAsUpdateV2(doc, encodedTargetStateVector, new UpdateEncoderV1());
/**
 * Read state vector from Decoder and return as Map
 *
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ const readStateVector = (decoder)=>{
    const ss = new Map();
    const ssLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
    for(let i = 0; i < ssLength; i++){
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        const clock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        ss.set(client, clock);
    }
    return ss;
};
/**
 * Read decodedState and return State as Map.
 *
 * @param {Uint8Array} decodedState
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ // export const decodeStateVectorV2 = decodedState => readStateVector(new DSDecoderV2(decoding.createDecoder(decodedState)))
/**
 * Read decodedState and return State as Map.
 *
 * @param {Uint8Array} decodedState
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ const decodeStateVector = (decodedState)=>readStateVector(new DSDecoderV1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](decodedState)));
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {Map<number,number>} sv
 * @function
 */ const writeStateVector = (encoder, sv)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, sv.size);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](sv.entries()).sort((a, b)=>b[0] - a[0]).forEach((param)=>{
        let [client, clock] = param;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, client); // @todo use a special client decoder that is based on mapping
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, clock);
    });
    return encoder;
};
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {Doc} doc
 *
 * @function
 */ const writeDocumentStateVector = (encoder, doc)=>writeStateVector(encoder, getStateVector(doc.store));
/**
 * Encode State as Uint8Array.
 *
 * @param {Doc|Map<number,number>} doc
 * @param {DSEncoderV1 | DSEncoderV2} [encoder]
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateVectorV2 = function(doc) {
    let encoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new DSEncoderV2();
    if (doc instanceof Map) {
        writeStateVector(encoder, doc);
    } else {
        writeDocumentStateVector(encoder, doc);
    }
    return encoder.toUint8Array();
};
/**
 * Encode State as Uint8Array.
 *
 * @param {Doc|Map<number,number>} doc
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateVector = (doc)=>encodeStateVectorV2(doc, new DSEncoderV1());
/**
 * General event handler implementation.
 *
 * @template ARG0, ARG1
 *
 * @private
 */ class EventHandler {
    constructor(){
        /**
     * @type {Array<function(ARG0, ARG1):void>}
     */ this.l = [];
    }
}
/**
 * @template ARG0,ARG1
 * @returns {EventHandler<ARG0,ARG1>}
 *
 * @private
 * @function
 */ const createEventHandler = ()=>new EventHandler();
/**
 * Adds an event listener that is called when
 * {@link EventHandler#callEventListeners} is called.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {function(ARG0,ARG1):void} f The event handler.
 *
 * @private
 * @function
 */ const addEventHandlerListener = (eventHandler, f)=>eventHandler.l.push(f);
/**
 * Removes an event listener.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {function(ARG0,ARG1):void} f The event handler that was added with
 *                     {@link EventHandler#addEventListener}
 *
 * @private
 * @function
 */ const removeEventHandlerListener = (eventHandler, f)=>{
    const l = eventHandler.l;
    const len = l.length;
    eventHandler.l = l.filter((g)=>f !== g);
    if (len === eventHandler.l.length) {
        console.error('[yjs] Tried to remove event handler that doesn\'t exist.');
    }
};
/**
 * Call all event listeners that were added via
 * {@link EventHandler#addEventListener}.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {ARG0} arg0
 * @param {ARG1} arg1
 *
 * @private
 * @function
 */ const callEventHandlerListeners = (eventHandler, arg0, arg1)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAll"](eventHandler.l, [
        arg0,
        arg1
    ]);
class ID {
    /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */ constructor(client, clock){
        /**
     * Client id
     * @type {number}
     */ this.client = client;
        /**
     * unique per client id, continuous number
     * @type {number}
     */ this.clock = clock;
    }
}
/**
 * @param {ID | null} a
 * @param {ID | null} b
 * @return {boolean}
 *
 * @function
 */ const compareIDs = (a, b)=>a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
/**
 * @param {number} client
 * @param {number} clock
 *
 * @private
 * @function
 */ const createID = (client, clock)=>new ID(client, clock);
/**
 * @param {encoding.Encoder} encoder
 * @param {ID} id
 *
 * @private
 * @function
 */ const writeID = (encoder, id)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder, id.client);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder, id.clock);
};
/**
 * Read ID.
 * * If first varUint read is 0xFFFFFF a RootID is returned.
 * * Otherwise an ID is returned
 *
 * @param {decoding.Decoder} decoder
 * @return {ID}
 *
 * @private
 * @function
 */ const readID = (decoder)=>createID(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder));
/**
 * The top types are mapped from y.share.get(keyname) => type.
 * `type` does not store any information about the `keyname`.
 * This function finds the correct `keyname` for `type` and throws otherwise.
 *
 * @param {AbstractType<any>} type
 * @return {string}
 *
 * @private
 * @function
 */ const findRootTypeKey = (type)=>{
    // @ts-ignore _y must be defined, otherwise unexpected case
    for (const [key, value] of type.doc.share.entries()){
        if (value === type) {
            return key;
        }
    }
    throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
};
/**
 * Check if `parent` is a parent of `child`.
 *
 * @param {AbstractType<any>} parent
 * @param {Item|null} child
 * @return {Boolean} Whether `parent` is a parent of `child`.
 *
 * @private
 * @function
 */ const isParentOf = (parent, child)=>{
    while(child !== null){
        if (child.parent === parent) {
            return true;
        }
        child = /** @type {AbstractType<any>} */ child.parent._item;
    }
    return false;
};
/**
 * Convenient helper to log type information.
 *
 * Do not use in productive systems as the output can be immense!
 *
 * @param {AbstractType<any>} type
 */ const logType = (type)=>{
    const res = [];
    let n = type._start;
    while(n){
        res.push(n);
        n = n.right;
    }
    console.log('Children: ', res);
    console.log('Children content: ', res.filter((m)=>!m.deleted).map((m)=>m.content));
};
class PermanentUserData {
    /**
   * @param {Doc} doc
   * @param {number} clientid
   * @param {string} userDescription
   * @param {Object} conf
   * @param {function(Transaction, DeleteSet):boolean} [conf.filter]
   */ setUserMapping(doc, clientid, userDescription) {
        let { filter = ()=>true } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const users = this.yusers;
        let user = users.get(userDescription);
        if (!user) {
            user = new YMap();
            user.set('ids', new YArray());
            user.set('ds', new YArray());
            users.set(userDescription, user);
        }
        user.get('ids').push([
            clientid
        ]);
        users.observe((_event)=>{
            setTimeout(()=>{
                const userOverwrite = users.get(userDescription);
                if (userOverwrite !== user) {
                    // user was overwritten, port all data over to the next user object
                    // @todo Experiment with Y.Sets here
                    user = userOverwrite;
                    // @todo iterate over old type
                    this.clients.forEach((_userDescription, clientid)=>{
                        if (userDescription === _userDescription) {
                            user.get('ids').push([
                                clientid
                            ]);
                        }
                    });
                    const encoder = new DSEncoderV1();
                    const ds = this.dss.get(userDescription);
                    if (ds) {
                        writeDeleteSet(encoder, ds);
                        user.get('ds').push([
                            encoder.toUint8Array()
                        ]);
                    }
                }
            }, 0);
        });
        doc.on('afterTransaction', /** @param {Transaction} transaction */ (transaction)=>{
            setTimeout(()=>{
                const yds = user.get('ds');
                const ds = transaction.deleteSet;
                if (transaction.local && ds.clients.size > 0 && filter(transaction, ds)) {
                    const encoder = new DSEncoderV1();
                    writeDeleteSet(encoder, ds);
                    yds.push([
                        encoder.toUint8Array()
                    ]);
                }
            });
        });
    }
    /**
   * @param {number} clientid
   * @return {any}
   */ getUserByClientId(clientid) {
        return this.clients.get(clientid) || null;
    }
    /**
   * @param {ID} id
   * @return {string | null}
   */ getUserByDeletedId(id) {
        for (const [userDescription, ds] of this.dss.entries()){
            if (isDeleted(ds, id)) {
                return userDescription;
            }
        }
        return null;
    }
    /**
   * @param {Doc} doc
   * @param {YMap<any>} [storeType]
   */ constructor(doc, storeType = doc.getMap('users')){
        /**
     * @type {Map<string,DeleteSet>}
     */ const dss = new Map();
        this.yusers = storeType;
        this.doc = doc;
        /**
     * Maps from clientid to userDescription
     *
     * @type {Map<number,string>}
     */ this.clients = new Map();
        this.dss = dss;
        /**
     * @param {YMap<any>} user
     * @param {string} userDescription
     */ const initUser = (user, userDescription)=>{
            /**
       * @type {YArray<Uint8Array>}
       */ const ds = user.get('ds');
            const ids = user.get('ids');
            const addClientId = /** @param {number} clientid */ (clientid)=>this.clients.set(clientid, userDescription);
            ds.observe(/** @param {YArrayEvent<any>} event */ (event)=>{
                event.changes.added.forEach((item)=>{
                    item.content.getContent().forEach((encodedDs)=>{
                        if (encodedDs instanceof Uint8Array) {
                            this.dss.set(userDescription, mergeDeleteSets([
                                this.dss.get(userDescription) || createDeleteSet(),
                                readDeleteSet(new DSDecoderV1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](encodedDs)))
                            ]));
                        }
                    });
                });
            });
            this.dss.set(userDescription, mergeDeleteSets(ds.map((encodedDs)=>readDeleteSet(new DSDecoderV1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](encodedDs))))));
            ids.observe(/** @param {YArrayEvent<any>} event */ (event)=>event.changes.added.forEach((item)=>item.content.getContent().forEach(addClientId)));
            ids.forEach(addClientId);
        };
        // observe users
        storeType.observe((event)=>{
            event.keysChanged.forEach((userDescription)=>initUser(storeType.get(userDescription), userDescription));
        });
        // add initial data
        storeType.forEach(initUser);
    }
}
/**
 * A relative position is based on the Yjs model and is not affected by document changes.
 * E.g. If you place a relative position before a certain character, it will always point to this character.
 * If you place a relative position at the end of a type, it will always point to the end of the type.
 *
 * A numeric position is often unsuited for user selections, because it does not change when content is inserted
 * before or after.
 *
 * ```Insert(0, 'x')('a|bc') = 'xa|bc'``` Where | is the relative position.
 *
 * One of the properties must be defined.
 *
 * @example
 *   // Current cursor position is at position 10
 *   const relativePosition = createRelativePositionFromIndex(yText, 10)
 *   // modify yText
 *   yText.insert(0, 'abc')
 *   yText.delete(3, 10)
 *   // Compute the cursor position
 *   const absolutePosition = createAbsolutePositionFromRelativePosition(y, relativePosition)
 *   absolutePosition.type === yText // => true
 *   console.log('cursor location is ' + absolutePosition.index) // => cursor location is 3
 *
 */ class RelativePosition {
    /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */ constructor(type, tname, item, assoc = 0){
        /**
     * @type {ID|null}
     */ this.type = type;
        /**
     * @type {string|null}
     */ this.tname = tname;
        /**
     * @type {ID | null}
     */ this.item = item;
        /**
     * A relative position is associated to a specific character. By default
     * assoc >= 0, the relative position is associated to the character
     * after the meant position.
     * I.e. position 1 in 'ab' is associated to character 'b'.
     *
     * If assoc < 0, then the relative position is associated to the character
     * before the meant position.
     *
     * @type {number}
     */ this.assoc = assoc;
    }
}
/**
 * @param {RelativePosition} rpos
 * @return {any}
 */ const relativePositionToJSON = (rpos)=>{
    const json = {};
    if (rpos.type) {
        json.type = rpos.type;
    }
    if (rpos.tname) {
        json.tname = rpos.tname;
    }
    if (rpos.item) {
        json.item = rpos.item;
    }
    if (rpos.assoc != null) {
        json.assoc = rpos.assoc;
    }
    return json;
};
/**
 * @param {any} json
 * @return {RelativePosition}
 *
 * @function
 */ const createRelativePositionFromJSON = (json)=>{
    var _json_tname;
    return new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), (_json_tname = json.tname) !== null && _json_tname !== void 0 ? _json_tname : null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
};
class AbsolutePosition {
    /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */ constructor(type, index, assoc = 0){
        /**
     * @type {AbstractType<any>}
     */ this.type = type;
        /**
     * @type {number}
     */ this.index = index;
        this.assoc = assoc;
    }
}
/**
 * @param {AbstractType<any>} type
 * @param {number} index
 * @param {number} [assoc]
 *
 * @function
 */ const createAbsolutePosition = function(type, index) {
    let assoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return new AbsolutePosition(type, index, assoc);
};
/**
 * @param {AbstractType<any>} type
 * @param {ID|null} item
 * @param {number} [assoc]
 *
 * @function
 */ const createRelativePosition = (type, item, assoc)=>{
    let typeid = null;
    let tname = null;
    if (type._item === null) {
        tname = findRootTypeKey(type);
    } else {
        typeid = createID(type._item.id.client, type._item.id.clock);
    }
    return new RelativePosition(typeid, tname, item, assoc);
};
/**
 * Create a relativePosition based on a absolute position.
 *
 * @param {AbstractType<any>} type The base type (e.g. YText or YArray).
 * @param {number} index The absolute position.
 * @param {number} [assoc]
 * @return {RelativePosition}
 *
 * @function
 */ const createRelativePositionFromTypeIndex = function(type, index) {
    let assoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let t = type._start;
    if (assoc < 0) {
        // associated to the left character or the beginning of a type, increment index if possible.
        if (index === 0) {
            return createRelativePosition(type, null, assoc);
        }
        index--;
    }
    while(t !== null){
        if (!t.deleted && t.countable) {
            if (t.length > index) {
                // case 1: found position somewhere in the linked list
                return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
            }
            index -= t.length;
        }
        if (t.right === null && assoc < 0) {
            // left-associated position, return last available id
            return createRelativePosition(type, t.lastId, assoc);
        }
        t = t.right;
    }
    return createRelativePosition(type, null, assoc);
};
/**
 * @param {encoding.Encoder} encoder
 * @param {RelativePosition} rpos
 *
 * @function
 */ const writeRelativePosition = (encoder, rpos)=>{
    const { type, tname, item, assoc } = rpos;
    if (item !== null) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder, 0);
        writeID(encoder, item);
    } else if (tname !== null) {
        // case 2: found position at the end of the list and type is stored in y.share
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8"](encoder, 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarString"](encoder, tname);
    } else if (type !== null) {
        // case 3: found position at the end of the list and type is attached to an item
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8"](encoder, 2);
        writeID(encoder, type);
    } else {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarInt"](encoder, assoc);
    return encoder;
};
/**
 * @param {RelativePosition} rpos
 * @return {Uint8Array}
 */ const encodeRelativePosition = (rpos)=>{
    const encoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"]();
    writeRelativePosition(encoder, rpos);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](encoder);
};
/**
 * @param {decoding.Decoder} decoder
 * @return {RelativePosition}
 *
 * @function
 */ const readRelativePosition = (decoder)=>{
    let type = null;
    let tname = null;
    let itemID = null;
    switch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder)){
        case 0:
            // case 1: found position somewhere in the linked list
            itemID = readID(decoder);
            break;
        case 1:
            // case 2: found position at the end of the list and type is stored in y.share
            tname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarString"](decoder);
            break;
        case 2:
            {
                // case 3: found position at the end of the list and type is attached to an item
                type = readID(decoder);
            }
    }
    const assoc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasContent"](decoder) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarInt"](decoder) : 0;
    return new RelativePosition(type, tname, itemID, assoc);
};
/**
 * @param {Uint8Array} uint8Array
 * @return {RelativePosition}
 */ const decodeRelativePosition = (uint8Array)=>readRelativePosition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](uint8Array));
/**
 * @param {StructStore} store
 * @param {ID} id
 */ const getItemWithOffset = (store, id)=>{
    const item = getItem(store, id);
    const diff = id.clock - item.id.clock;
    return {
        item,
        diff
    };
};
/**
 * Transform a relative position to an absolute position.
 *
 * If you want to share the relative position with other users, you should set
 * `followUndoneDeletions` to false to get consistent results across all clients.
 *
 * When calculating the absolute position, we try to follow the "undone deletions". This yields
 * better results for the user who performed undo. However, only the user who performed the undo
 * will get the better results, the other users don't know which operations recreated a deleted
 * range of content. There is more information in this ticket: https://github.com/yjs/yjs/issues/638
 *
 * @param {RelativePosition} rpos
 * @param {Doc} doc
 * @param {boolean} followUndoneDeletions - whether to follow undone deletions - see https://github.com/yjs/yjs/issues/638
 * @return {AbsolutePosition|null}
 *
 * @function
 */ const createAbsolutePositionFromRelativePosition = function(rpos, doc) {
    let followUndoneDeletions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const store = doc.store;
    const rightID = rpos.item;
    const typeID = rpos.type;
    const tname = rpos.tname;
    const assoc = rpos.assoc;
    let type = null;
    let index = 0;
    if (rightID !== null) {
        if (getState(store, rightID.client) <= rightID.clock) {
            return null;
        }
        const res = followUndoneDeletions ? followRedone(store, rightID) : getItemWithOffset(store, rightID);
        const right = res.item;
        if (!(right instanceof Item)) {
            return null;
        }
        type = right.parent;
        if (type._item === null || !type._item.deleted) {
            index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1); // adjust position based on left association if necessary
            let n = right.left;
            while(n !== null){
                if (!n.deleted && n.countable) {
                    index += n.length;
                }
                n = n.left;
            }
        }
    } else {
        if (tname !== null) {
            type = doc.get(tname);
        } else if (typeID !== null) {
            if (getState(store, typeID.client) <= typeID.clock) {
                // type does not exist yet
                return null;
            }
            const { item } = followUndoneDeletions ? followRedone(store, typeID) : {
                item: getItem(store, typeID)
            };
            if (item instanceof Item && item.content instanceof ContentType) {
                type = item.content.type;
            } else {
                // struct is garbage collected
                return null;
            }
        } else {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        if (assoc >= 0) {
            index = type._length;
        } else {
            index = 0;
        }
    }
    return createAbsolutePosition(type, index, rpos.assoc);
};
/**
 * @param {RelativePosition|null} a
 * @param {RelativePosition|null} b
 * @return {boolean}
 *
 * @function
 */ const compareRelativePositions = (a, b)=>a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
class Snapshot {
    /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */ constructor(ds, sv){
        /**
     * @type {DeleteSet}
     */ this.ds = ds;
        /**
     * State Map
     * @type {Map<number,number>}
     */ this.sv = sv;
    }
}
/**
 * @param {Snapshot} snap1
 * @param {Snapshot} snap2
 * @return {boolean}
 */ const equalSnapshots = (snap1, snap2)=>{
    const ds1 = snap1.ds.clients;
    const ds2 = snap2.ds.clients;
    const sv1 = snap1.sv;
    const sv2 = snap2.sv;
    if (sv1.size !== sv2.size || ds1.size !== ds2.size) {
        return false;
    }
    for (const [key, value] of sv1.entries()){
        if (sv2.get(key) !== value) {
            return false;
        }
    }
    for (const [client, dsitems1] of ds1.entries()){
        const dsitems2 = ds2.get(client) || [];
        if (dsitems1.length !== dsitems2.length) {
            return false;
        }
        for(let i = 0; i < dsitems1.length; i++){
            const dsitem1 = dsitems1[i];
            const dsitem2 = dsitems2[i];
            if (dsitem1.clock !== dsitem2.clock || dsitem1.len !== dsitem2.len) {
                return false;
            }
        }
    }
    return true;
};
/**
 * @param {Snapshot} snapshot
 * @param {DSEncoderV1 | DSEncoderV2} [encoder]
 * @return {Uint8Array}
 */ const encodeSnapshotV2 = function(snapshot) {
    let encoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new DSEncoderV2();
    writeDeleteSet(encoder, snapshot.ds);
    writeStateVector(encoder, snapshot.sv);
    return encoder.toUint8Array();
};
/**
 * @param {Snapshot} snapshot
 * @return {Uint8Array}
 */ const encodeSnapshot = (snapshot)=>encodeSnapshotV2(snapshot, new DSEncoderV1());
/**
 * @param {Uint8Array} buf
 * @param {DSDecoderV1 | DSDecoderV2} [decoder]
 * @return {Snapshot}
 */ const decodeSnapshotV2 = function(buf) {
    let decoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new DSDecoderV2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](buf));
    return new Snapshot(readDeleteSet(decoder), readStateVector(decoder));
};
/**
 * @param {Uint8Array} buf
 * @return {Snapshot}
 */ const decodeSnapshot = (buf)=>decodeSnapshotV2(buf, new DSDecoderV1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](buf)));
/**
 * @param {DeleteSet} ds
 * @param {Map<number,number>} sm
 * @return {Snapshot}
 */ const createSnapshot = (ds, sm)=>new Snapshot(ds, sm);
const emptySnapshot = createSnapshot(createDeleteSet(), new Map());
/**
 * @param {Doc} doc
 * @return {Snapshot}
 */ const snapshot = (doc)=>createSnapshot(createDeleteSetFromStructStore(doc.store), getStateVector(doc.store));
/**
 * @param {Item} item
 * @param {Snapshot|undefined} snapshot
 *
 * @protected
 * @function
 */ const isVisible = (item, snapshot)=>snapshot === undefined ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
/**
 * @param {Transaction} transaction
 * @param {Snapshot} snapshot
 */ const splitSnapshotAffectedStructs = (transaction, snapshot)=>{
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](transaction.meta, splitSnapshotAffectedStructs, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]);
    const store = transaction.doc.store;
    // check if we already split for this snapshot
    if (!meta.has(snapshot)) {
        snapshot.sv.forEach((clock, client)=>{
            if (clock < getState(store, client)) {
                getItemCleanStart(transaction, createID(client, clock));
            }
        });
        iterateDeletedStructs(transaction, snapshot.ds, (_item)=>{});
        meta.add(snapshot);
    }
};
/**
 * @example
 *  const ydoc = new Y.Doc({ gc: false })
 *  ydoc.getText().insert(0, 'world!')
 *  const snapshot = Y.snapshot(ydoc)
 *  ydoc.getText().insert(0, 'hello ')
 *  const restored = Y.createDocFromSnapshot(ydoc, snapshot)
 *  assert(restored.getText().toString() === 'world!')
 *
 * @param {Doc} originDoc
 * @param {Snapshot} snapshot
 * @param {Doc} [newDoc] Optionally, you may define the Yjs document that receives the data from originDoc
 * @return {Doc}
 */ const createDocFromSnapshot = function(originDoc, snapshot) {
    let newDoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Doc();
    if (originDoc.gc) {
        // we should not try to restore a GC-ed document, because some of the restored items might have their content deleted
        throw new Error('Garbage-collection must be disabled in `originDoc`!');
    }
    const { sv, ds } = snapshot;
    const encoder = new UpdateEncoderV2();
    originDoc.transact((transaction)=>{
        let size = 0;
        sv.forEach((clock)=>{
            if (clock > 0) {
                size++;
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, size);
        // splitting the structs before writing them to the encoder
        for (const [client, clock] of sv){
            if (clock === 0) {
                continue;
            }
            if (clock < getState(originDoc.store, client)) {
                getItemCleanStart(transaction, createID(client, clock));
            }
            const structs = originDoc.store.clients.get(client) || [];
            const lastStructIndex = findIndexSS(structs, clock - 1);
            // write # encoded structs
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, lastStructIndex + 1);
            encoder.writeClient(client);
            // first clock written is 0
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, 0);
            for(let i = 0; i <= lastStructIndex; i++){
                structs[i].write(encoder, 0);
            }
        }
        writeDeleteSet(encoder, ds);
    });
    applyUpdateV2(newDoc, encoder.toUint8Array(), 'snapshot');
    return newDoc;
};
/**
 * @param {Snapshot} snapshot
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 */ const snapshotContainsUpdateV2 = function(snapshot, update) {
    let YDecoder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : UpdateDecoderV2;
    const updateDecoder = new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()){
        if ((snapshot.sv.get(curr.id.client) || 0) < curr.id.clock + curr.length) {
            return false;
        }
    }
    const mergedDS = mergeDeleteSets([
        snapshot.ds,
        readDeleteSet(updateDecoder)
    ]);
    return equalDeleteSets(snapshot.ds, mergedDS);
};
/**
 * @param {Snapshot} snapshot
 * @param {Uint8Array} update
 */ const snapshotContainsUpdate = (snapshot, update)=>snapshotContainsUpdateV2(snapshot, update, UpdateDecoderV1);
class StructStore {
    constructor(){
        /**
     * @type {Map<number,Array<GC|Item>>}
     */ this.clients = new Map();
        /**
     * @type {null | { missing: Map<number, number>, update: Uint8Array }}
     */ this.pendingStructs = null;
        /**
     * @type {null | Uint8Array}
     */ this.pendingDs = null;
    }
}
/**
 * Return the states as a Map<client,clock>.
 * Note that clock refers to the next expected clock id.
 *
 * @param {StructStore} store
 * @return {Map<number,number>}
 *
 * @public
 * @function
 */ const getStateVector = (store)=>{
    const sm = new Map();
    store.clients.forEach((structs, client)=>{
        const struct = structs[structs.length - 1];
        sm.set(client, struct.id.clock + struct.length);
    });
    return sm;
};
/**
 * @param {StructStore} store
 * @param {number} client
 * @return {number}
 *
 * @public
 * @function
 */ const getState = (store, client)=>{
    const structs = store.clients.get(client);
    if (structs === undefined) {
        return 0;
    }
    const lastStruct = structs[structs.length - 1];
    return lastStruct.id.clock + lastStruct.length;
};
/**
 * @param {StructStore} store
 * @param {GC|Item} struct
 *
 * @private
 * @function
 */ const addStruct = (store, struct)=>{
    let structs = store.clients.get(struct.id.client);
    if (structs === undefined) {
        structs = [];
        store.clients.set(struct.id.client, structs);
    } else {
        const lastStruct = structs[structs.length - 1];
        if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
    }
    structs.push(struct);
};
/**
 * Perform a binary search on a sorted array
 * @param {Array<Item|GC>} structs
 * @param {number} clock
 * @return {number}
 *
 * @private
 * @function
 */ const findIndexSS = (structs, clock)=>{
    let left = 0;
    let right = structs.length - 1;
    let mid = structs[right];
    let midclock = mid.id.clock;
    if (midclock === clock) {
        return right;
    }
    // @todo does it even make sense to pivot the search?
    // If a good split misses, it might actually increase the time to find the correct item.
    // Currently, the only advantage is that search with pivoting might find the item on the first try.
    let midindex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"](clock / (midclock + mid.length - 1) * right); // pivoting the search
    while(left <= right){
        mid = structs[midindex];
        midclock = mid.id.clock;
        if (midclock <= clock) {
            if (clock < midclock + mid.length) {
                return midindex;
            }
            left = midindex + 1;
        } else {
            right = midindex - 1;
        }
        midindex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"]((left + right) / 2);
    }
    // Always check state before looking for a struct in StructStore
    // Therefore the case of not finding a struct is unexpected
    throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {StructStore} store
 * @param {ID} id
 * @return {GC|Item}
 *
 * @private
 * @function
 */ const find = (store, id)=>{
    /**
   * @type {Array<GC|Item>}
   */ // @ts-ignore
    const structs = store.clients.get(id.client);
    return structs[findIndexSS(structs, id.clock)];
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 * @private
 * @function
 */ const getItem = find;
/**
 * @param {Transaction} transaction
 * @param {Array<Item|GC>} structs
 * @param {number} clock
 */ const findIndexCleanStart = (transaction, structs, clock)=>{
    const index = findIndexSS(structs, clock);
    const struct = structs[index];
    if (struct.id.clock < clock && struct instanceof Item) {
        structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
        return index + 1;
    }
    return index;
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {Transaction} transaction
 * @param {ID} id
 * @return {Item}
 *
 * @private
 * @function
 */ const getItemCleanStart = (transaction, id)=>{
    const structs = transaction.doc.store.clients.get(id.client);
    return structs[findIndexCleanStart(transaction, structs, id.clock)];
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @param {ID} id
 * @return {Item}
 *
 * @private
 * @function
 */ const getItemCleanEnd = (transaction, store, id)=>{
    /**
   * @type {Array<Item>}
   */ // @ts-ignore
    const structs = store.clients.get(id.client);
    const index = findIndexSS(structs, id.clock);
    const struct = structs[index];
    if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
        structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
    }
    return struct;
};
/**
 * Replace `item` with `newitem` in store
 * @param {StructStore} store
 * @param {GC|Item} struct
 * @param {GC|Item} newStruct
 *
 * @private
 * @function
 */ const replaceStruct = (store, struct, newStruct)=>{
    const structs = store.clients.get(struct.id.client);
    structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
/**
 * Iterate over a range of structs
 *
 * @param {Transaction} transaction
 * @param {Array<Item|GC>} structs
 * @param {number} clockStart Inclusive start
 * @param {number} len
 * @param {function(GC|Item):void} f
 *
 * @function
 */ const iterateStructs = (transaction, structs, clockStart, len, f)=>{
    if (len === 0) {
        return;
    }
    const clockEnd = clockStart + len;
    let index = findIndexCleanStart(transaction, structs, clockStart);
    let struct;
    do {
        struct = structs[index++];
        if (clockEnd < struct.id.clock + struct.length) {
            findIndexCleanStart(transaction, structs, clockEnd);
        }
        f(struct);
    }while (index < structs.length && structs[index].id.clock < clockEnd)
};
/**
 * A transaction is created for every change on the Yjs model. It is possible
 * to bundle changes on the Yjs model in a single transaction to
 * minimize the number on messages sent and the number of observer calls.
 * If possible the user of this library should bundle as many changes as
 * possible. Here is an example to illustrate the advantages of bundling:
 *
 * @example
 * const ydoc = new Y.Doc()
 * const map = ydoc.getMap('map')
 * // Log content when change is triggered
 * map.observe(() => {
 *   console.log('change triggered')
 * })
 * // Each change on the map type triggers a log message:
 * map.set('a', 0) // => "change triggered"
 * map.set('b', 0) // => "change triggered"
 * // When put in a transaction, it will trigger the log after the transaction:
 * ydoc.transact(() => {
 *   map.set('a', 1)
 *   map.set('b', 1)
 * }) // => "change triggered"
 *
 * @public
 */ class Transaction {
    /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */ constructor(doc, origin, local){
        /**
     * The Yjs instance.
     * @type {Doc}
     */ this.doc = doc;
        /**
     * Describes the set of deleted items by ids
     * @type {DeleteSet}
     */ this.deleteSet = new DeleteSet();
        /**
     * Holds the state before the transaction started.
     * @type {Map<Number,Number>}
     */ this.beforeState = getStateVector(doc.store);
        /**
     * Holds the state after the transaction.
     * @type {Map<Number,Number>}
     */ this.afterState = new Map();
        /**
     * All types that were directly modified (property added or child
     * inserted/deleted). New types are not included in this Set.
     * Maps from type to parentSubs (`item.parentSub = null` for YArray)
     * @type {Map<AbstractType<YEvent<any>>,Set<String|null>>}
     */ this.changed = new Map();
        /**
     * Stores the events for the types that observe also child elements.
     * It is mainly used by `observeDeep`.
     * @type {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>}
     */ this.changedParentTypes = new Map();
        /**
     * @type {Array<AbstractStruct>}
     */ this._mergeStructs = [];
        /**
     * @type {any}
     */ this.origin = origin;
        /**
     * Stores meta information on the transaction
     * @type {Map<any,any>}
     */ this.meta = new Map();
        /**
     * Whether this change originates from this doc.
     * @type {boolean}
     */ this.local = local;
        /**
     * @type {Set<Doc>}
     */ this.subdocsAdded = new Set();
        /**
     * @type {Set<Doc>}
     */ this.subdocsRemoved = new Set();
        /**
     * @type {Set<Doc>}
     */ this.subdocsLoaded = new Set();
        /**
     * @type {boolean}
     */ this._needFormattingCleanup = false;
    }
}
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Transaction} transaction
 * @return {boolean} Whether data was written.
 */ const writeUpdateMessageFromTransaction = (encoder, transaction)=>{
    if (transaction.deleteSet.clients.size === 0 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"](transaction.afterState, (clock, client)=>transaction.beforeState.get(client) !== clock)) {
        return false;
    }
    sortAndMergeDeleteSet(transaction.deleteSet);
    writeStructsFromTransaction(encoder, transaction);
    writeDeleteSet(encoder, transaction.deleteSet);
    return true;
};
/**
 * If `type.parent` was added in current transaction, `type` technically
 * did not change, it was just added and we should not fire events for `type`.
 *
 * @param {Transaction} transaction
 * @param {AbstractType<YEvent<any>>} type
 * @param {string|null} parentSub
 */ const addChangedTypeToTransaction = (transaction, type, parentSub)=>{
    const item = type._item;
    if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](transaction.changed, type, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]).add(parentSub);
    }
};
/**
 * @param {Array<AbstractStruct>} structs
 * @param {number} pos
 * @return {number} # of merged structs
 */ const tryToMergeWithLefts = (structs, pos)=>{
    let right = structs[pos];
    let left = structs[pos - 1];
    let i = pos;
    for(; i > 0; right = left, left = structs[--i - 1]){
        if (left.deleted === right.deleted && left.constructor === right.constructor) {
            if (left.mergeWith(right)) {
                if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */ right.parent._map.get(right.parentSub) === right) {
                    /** @type {AbstractType<any>} */ right.parent._map.set(right.parentSub, left);
                }
                continue;
            }
        }
        break;
    }
    const merged = pos - i;
    if (merged) {
        // remove all merged structs from the array
        structs.splice(pos + 1 - merged, merged);
    }
    return merged;
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 * @param {function(Item):boolean} gcFilter
 */ const tryGcDeleteSet = (ds, store, gcFilter)=>{
    for (const [client, deleteItems] of ds.clients.entries()){
        const structs = store.clients.get(client);
        for(let di = deleteItems.length - 1; di >= 0; di--){
            const deleteItem = deleteItems[di];
            const endDeleteItemClock = deleteItem.clock + deleteItem.len;
            for(let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]){
                const struct = structs[si];
                if (deleteItem.clock + deleteItem.len <= struct.id.clock) {
                    break;
                }
                if (struct instanceof Item && struct.deleted && !struct.keep && gcFilter(struct)) {
                    struct.gc(store, false);
                }
            }
        }
    }
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 */ const tryMergeDeleteSet = (ds, store)=>{
    // try to merge deleted / gc'd items
    // merge from right to left for better efficiency and so we don't miss any merge targets
    ds.clients.forEach((deleteItems, client)=>{
        const structs = store.clients.get(client);
        for(let di = deleteItems.length - 1; di >= 0; di--){
            const deleteItem = deleteItems[di];
            // start with merging the item next to the last deleted item
            const mostRightIndexToCheck = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"](structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
            for(let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]){
                si -= 1 + tryToMergeWithLefts(structs, si);
            }
        }
    });
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 * @param {function(Item):boolean} gcFilter
 */ const tryGc = (ds, store, gcFilter)=>{
    tryGcDeleteSet(ds, store, gcFilter);
    tryMergeDeleteSet(ds, store);
};
/**
 * @param {Array<Transaction>} transactionCleanups
 * @param {number} i
 */ const cleanupTransactions = (transactionCleanups, i)=>{
    if (i < transactionCleanups.length) {
        const transaction = transactionCleanups[i];
        const doc = transaction.doc;
        const store = doc.store;
        const ds = transaction.deleteSet;
        const mergeStructs = transaction._mergeStructs;
        try {
            sortAndMergeDeleteSet(ds);
            transaction.afterState = getStateVector(transaction.doc.store);
            doc.emit('beforeObserverCalls', [
                transaction,
                doc
            ]);
            /**
       * An array of event callbacks.
       *
       * Each callback is called even if the other ones throw errors.
       *
       * @type {Array<function():void>}
       */ const fs = [];
            // observe events on changed types
            transaction.changed.forEach((subs, itemtype)=>fs.push(()=>{
                    if (itemtype._item === null || !itemtype._item.deleted) {
                        itemtype._callObserver(transaction, subs);
                    }
                }));
            fs.push(()=>{
                // deep observe events
                transaction.changedParentTypes.forEach((events, type)=>{
                    // We need to think about the possibility that the user transforms the
                    // Y.Doc in the event.
                    if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
                        events = events.filter((event)=>event.target._item === null || !event.target._item.deleted);
                        events.forEach((event)=>{
                            event.currentTarget = type;
                            // path is relative to the current target
                            event._path = null;
                        });
                        // sort events by path length so that top-level events are fired first.
                        events.sort((event1, event2)=>event1.path.length - event2.path.length);
                        // We don't need to check for events.length
                        // because we know it has at least one element
                        callEventHandlerListeners(type._dEH, events, transaction);
                    }
                });
            });
            fs.push(()=>doc.emit('afterTransaction', [
                    transaction,
                    doc
                ]));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAll"])(fs, []);
            if (transaction._needFormattingCleanup) {
                cleanupYTextAfterTransaction(transaction);
            }
        } finally{
            // Replace deleted items with ItemDeleted / GC.
            // This is where content is actually remove from the Yjs Doc.
            if (doc.gc) {
                tryGcDeleteSet(ds, store, doc.gcFilter);
            }
            tryMergeDeleteSet(ds, store);
            // on all affected store.clients props, try to merge
            transaction.afterState.forEach((clock, client)=>{
                const beforeClock = transaction.beforeState.get(client) || 0;
                if (beforeClock !== clock) {
                    const structs = store.clients.get(client);
                    // we iterate from right to left so we can safely remove entries
                    const firstChangePos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](findIndexSS(structs, beforeClock), 1);
                    for(let i = structs.length - 1; i >= firstChangePos;){
                        i -= 1 + tryToMergeWithLefts(structs, i);
                    }
                }
            });
            // try to merge mergeStructs
            // @todo: it makes more sense to transform mergeStructs to a DS, sort it, and merge from right to left
            //        but at the moment DS does not handle duplicates
            for(let i = mergeStructs.length - 1; i >= 0; i--){
                const { client, clock } = mergeStructs[i].id;
                const structs = store.clients.get(client);
                const replacedStructPos = findIndexSS(structs, clock);
                if (replacedStructPos + 1 < structs.length) {
                    if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
                        continue; // no need to perform next check, both are already merged
                    }
                }
                if (replacedStructPos > 0) {
                    tryToMergeWithLefts(structs, replacedStructPos);
                }
            }
            if (!transaction.local && transaction.afterState.get(doc.clientID) !== transaction.beforeState.get(doc.clientID)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["print"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORANGE"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOLD"], '[yjs] ', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNBOLD"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RED"], 'Changed the client-id because another client seems to be using it.');
                doc.clientID = generateNewClientId();
            }
            // @todo Merge all the transactions into one and provide send the data as a single update message
            doc.emit('afterTransactionCleanup', [
                transaction,
                doc
            ]);
            if (doc._observers.has('update')) {
                const encoder = new UpdateEncoderV1();
                const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
                if (hasContent) {
                    doc.emit('update', [
                        encoder.toUint8Array(),
                        transaction.origin,
                        doc,
                        transaction
                    ]);
                }
            }
            if (doc._observers.has('updateV2')) {
                const encoder = new UpdateEncoderV2();
                const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
                if (hasContent) {
                    doc.emit('updateV2', [
                        encoder.toUint8Array(),
                        transaction.origin,
                        doc,
                        transaction
                    ]);
                }
            }
            const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
            if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
                subdocsAdded.forEach((subdoc)=>{
                    subdoc.clientID = doc.clientID;
                    if (subdoc.collectionid == null) {
                        subdoc.collectionid = doc.collectionid;
                    }
                    doc.subdocs.add(subdoc);
                });
                subdocsRemoved.forEach((subdoc)=>doc.subdocs.delete(subdoc));
                doc.emit('subdocs', [
                    {
                        loaded: subdocsLoaded,
                        added: subdocsAdded,
                        removed: subdocsRemoved
                    },
                    doc,
                    transaction
                ]);
                subdocsRemoved.forEach((subdoc)=>subdoc.destroy());
            }
            if (transactionCleanups.length <= i + 1) {
                doc._transactionCleanups = [];
                doc.emit('afterAllTransactions', [
                    doc,
                    transactionCleanups
                ]);
            } else {
                cleanupTransactions(transactionCleanups, i + 1);
            }
        }
    }
};
/**
 * Implements the functionality of `y.transact(()=>{..})`
 *
 * @template T
 * @param {Doc} doc
 * @param {function(Transaction):T} f
 * @param {any} [origin=true]
 * @return {T}
 *
 * @function
 */ const transact = function(doc, f) {
    let origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, local = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    const transactionCleanups = doc._transactionCleanups;
    let initialCall = false;
    /**
   * @type {any}
   */ let result = null;
    if (doc._transaction === null) {
        initialCall = true;
        doc._transaction = new Transaction(doc, origin, local);
        transactionCleanups.push(doc._transaction);
        if (transactionCleanups.length === 1) {
            doc.emit('beforeAllTransactions', [
                doc
            ]);
        }
        doc.emit('beforeTransaction', [
            doc._transaction,
            doc
        ]);
    }
    try {
        result = f(doc._transaction);
    } finally{
        if (initialCall) {
            const finishCleanup = doc._transaction === transactionCleanups[0];
            doc._transaction = null;
            if (finishCleanup) {
                // The first transaction ended, now process observer calls.
                // Observer call may create new transactions for which we need to call the observers and do cleanup.
                // We don't want to nest these calls, so we execute these calls one after
                // another.
                // Also we need to ensure that all cleanups are called, even if the
                // observes throw errors.
                // This file is full of hacky try {} finally {} blocks to ensure that an
                // event can throw errors and also that the cleanup is called.
                cleanupTransactions(transactionCleanups, 0);
            }
        }
    }
    return result;
};
class StackItem {
    /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */ constructor(deletions, insertions){
        this.insertions = insertions;
        this.deletions = deletions;
        /**
     * Use this to save and restore metadata like selection range
     */ this.meta = new Map();
    }
}
/**
 * @param {Transaction} tr
 * @param {UndoManager} um
 * @param {StackItem} stackItem
 */ const clearUndoManagerStackItem = (tr, um, stackItem)=>{
    iterateDeletedStructs(tr, stackItem.deletions, (item)=>{
        if (item instanceof Item && um.scope.some((type)=>type === tr.doc || isParentOf(type, item))) {
            keepItem(item, false);
        }
    });
};
/**
 * @param {UndoManager} undoManager
 * @param {Array<StackItem>} stack
 * @param {'undo'|'redo'} eventType
 * @return {StackItem?}
 */ const popStackItem = (undoManager, stack, eventType)=>{
    /**
   * Keep a reference to the transaction so we can fire the event with the changedParentTypes
   * @type {any}
   */ let _tr = null;
    const doc = undoManager.doc;
    const scope = undoManager.scope;
    transact(doc, (transaction)=>{
        while(stack.length > 0 && undoManager.currStackItem === null){
            const store = doc.store;
            const stackItem = stack.pop();
            /**
       * @type {Set<Item>}
       */ const itemsToRedo = new Set();
            /**
       * @type {Array<Item>}
       */ const itemsToDelete = [];
            let performedChange = false;
            iterateDeletedStructs(transaction, stackItem.insertions, (struct)=>{
                if (struct instanceof Item) {
                    if (struct.redone !== null) {
                        let { item, diff } = followRedone(store, struct.id);
                        if (diff > 0) {
                            item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
                        }
                        struct = item;
                    }
                    if (!struct.deleted && scope.some((type)=>type === transaction.doc || isParentOf(type, struct))) {
                        itemsToDelete.push(struct);
                    }
                }
            });
            iterateDeletedStructs(transaction, stackItem.deletions, (struct)=>{
                if (struct instanceof Item && scope.some((type)=>type === transaction.doc || isParentOf(type, struct)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
                !isDeleted(stackItem.insertions, struct.id)) {
                    itemsToRedo.add(struct);
                }
            });
            itemsToRedo.forEach((struct)=>{
                performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
            });
            // We want to delete in reverse order so that children are deleted before
            // parents, so we have more information available when items are filtered.
            for(let i = itemsToDelete.length - 1; i >= 0; i--){
                const item = itemsToDelete[i];
                if (undoManager.deleteFilter(item)) {
                    item.delete(transaction);
                    performedChange = true;
                }
            }
            undoManager.currStackItem = performedChange ? stackItem : null;
        }
        transaction.changed.forEach((subProps, type)=>{
            // destroy search marker if necessary
            if (subProps.has(null) && type._searchMarker) {
                type._searchMarker.length = 0;
            }
        });
        _tr = transaction;
    }, undoManager);
    const res = undoManager.currStackItem;
    if (res != null) {
        const changedParentTypes = _tr.changedParentTypes;
        undoManager.emit('stack-item-popped', [
            {
                stackItem: res,
                type: eventType,
                changedParentTypes,
                origin: undoManager
            },
            undoManager
        ]);
        undoManager.currStackItem = null;
    }
    return res;
};
/**
 * @typedef {Object} UndoManagerOptions
 * @property {number} [UndoManagerOptions.captureTimeout=500]
 * @property {function(Transaction):boolean} [UndoManagerOptions.captureTransaction] Do not capture changes of a Transaction if result false.
 * @property {function(Item):boolean} [UndoManagerOptions.deleteFilter=()=>true] Sometimes
 * it is necessary to filter what an Undo/Redo operation can delete. If this
 * filter returns false, the type/item won't be deleted even it is in the
 * undo/redo scope.
 * @property {Set<any>} [UndoManagerOptions.trackedOrigins=new Set([null])]
 * @property {boolean} [ignoreRemoteMapChanges] Experimental. By default, the UndoManager will never overwrite remote changes. Enable this property to enable overwriting remote changes on key-value changes (Y.Map, properties on Y.Xml, etc..).
 * @property {Doc} [doc] The document that this UndoManager operates on. Only needed if typeScope is empty.
 */ /**
 * @typedef {Object} StackItemEvent
 * @property {StackItem} StackItemEvent.stackItem
 * @property {any} StackItemEvent.origin
 * @property {'undo'|'redo'} StackItemEvent.type
 * @property {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>} StackItemEvent.changedParentTypes
 */ /**
 * Fires 'stack-item-added' event when a stack item was added to either the undo- or
 * the redo-stack. You may store additional stack information via the
 * metadata property on `event.stackItem.meta` (it is a `Map` of metadata properties).
 * Fires 'stack-item-popped' event when a stack item was popped from either the
 * undo- or the redo-stack. You may restore the saved stack information from `event.stackItem.meta`.
 *
 * @extends {ObservableV2<{'stack-item-added':function(StackItemEvent, UndoManager):void, 'stack-item-popped': function(StackItemEvent, UndoManager):void, 'stack-cleared': function({ undoStackCleared: boolean, redoStackCleared: boolean }):void, 'stack-item-updated': function(StackItemEvent, UndoManager):void }>}
 */ class UndoManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableV2"] {
    /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */ addToScope(ytypes) {
        const tmpSet = new Set(this.scope);
        ytypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](ytypes) ? ytypes : [
            ytypes
        ];
        ytypes.forEach((ytype)=>{
            if (!tmpSet.has(ytype)) {
                tmpSet.add(ytype);
                if (ytype instanceof AbstractType ? ytype.doc !== this.doc : ytype !== this.doc) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warn"]('[yjs#509] Not same Y.Doc'); // use MultiDocUndoManager instead. also see https://github.com/yjs/yjs/issues/509
                this.scope.push(ytype);
            }
        });
    }
    /**
   * @param {any} origin
   */ addTrackedOrigin(origin) {
        this.trackedOrigins.add(origin);
    }
    /**
   * @param {any} origin
   */ removeTrackedOrigin(origin) {
        this.trackedOrigins.delete(origin);
    }
    clear() {
        let clearUndoStack = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, clearRedoStack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
            this.doc.transact((tr)=>{
                if (clearUndoStack) {
                    this.undoStack.forEach((item)=>clearUndoManagerStackItem(tr, this, item));
                    this.undoStack = [];
                }
                if (clearRedoStack) {
                    this.redoStack.forEach((item)=>clearUndoManagerStackItem(tr, this, item));
                    this.redoStack = [];
                }
                this.emit('stack-cleared', [
                    {
                        undoStackCleared: clearUndoStack,
                        redoStackCleared: clearRedoStack
                    }
                ]);
            });
        }
    }
    /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */ stopCapturing() {
        this.lastChange = 0;
    }
    /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */ undo() {
        this.undoing = true;
        let res;
        try {
            res = popStackItem(this, this.undoStack, 'undo');
        } finally{
            this.undoing = false;
        }
        return res;
    }
    /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */ redo() {
        this.redoing = true;
        let res;
        try {
            res = popStackItem(this, this.redoStack, 'redo');
        } finally{
            this.redoing = false;
        }
        return res;
    }
    /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */ canUndo() {
        return this.undoStack.length > 0;
    }
    /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */ canRedo() {
        return this.redoStack.length > 0;
    }
    destroy() {
        this.trackedOrigins.delete(this);
        this.doc.off('afterTransaction', this.afterTransactionHandler);
        super.destroy();
    }
    /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */ constructor(typeScope, { captureTimeout = 500, captureTransaction = (_tr)=>true, deleteFilter = ()=>true, trackedOrigins = new Set([
        null
    ]), ignoreRemoteMapChanges = false, doc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"](typeScope) ? typeScope[0].doc : typeScope instanceof Doc ? typeScope : typeScope.doc } = {}){
        super();
        /**
     * @type {Array<AbstractType<any> | Doc>}
     */ this.scope = [];
        this.doc = doc;
        this.addToScope(typeScope);
        this.deleteFilter = deleteFilter;
        trackedOrigins.add(this);
        this.trackedOrigins = trackedOrigins;
        this.captureTransaction = captureTransaction;
        /**
     * @type {Array<StackItem>}
     */ this.undoStack = [];
        /**
     * @type {Array<StackItem>}
     */ this.redoStack = [];
        /**
     * Whether the client is currently undoing (calling UndoManager.undo)
     *
     * @type {boolean}
     */ this.undoing = false;
        this.redoing = false;
        /**
     * The currently popped stack item if UndoManager.undoing or UndoManager.redoing
     *
     * @type {StackItem|null}
     */ this.currStackItem = null;
        this.lastChange = 0;
        this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
        this.captureTimeout = captureTimeout;
        /**
     * @param {Transaction} transaction
     */ this.afterTransactionHandler = (transaction)=>{
            // Only track certain transactions
            if (!this.captureTransaction(transaction) || !this.scope.some((type)=>transaction.changedParentTypes.has(type) || type === this.doc) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
                return;
            }
            const undoing = this.undoing;
            const redoing = this.redoing;
            const stack = undoing ? this.redoStack : this.undoStack;
            if (undoing) {
                this.stopCapturing(); // next undo should not be appended to last stack item
            } else if (!redoing) {
                // neither undoing nor redoing: delete redoStack
                this.clear(false, true);
            }
            const insertions = new DeleteSet();
            transaction.afterState.forEach((endClock, client)=>{
                const startClock = transaction.beforeState.get(client) || 0;
                const len = endClock - startClock;
                if (len > 0) {
                    addToDeleteSet(insertions, client, startClock, len);
                }
            });
            const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnixTime"]();
            let didAdd = false;
            if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
                // append change to last stack op
                const lastOp = stack[stack.length - 1];
                lastOp.deletions = mergeDeleteSets([
                    lastOp.deletions,
                    transaction.deleteSet
                ]);
                lastOp.insertions = mergeDeleteSets([
                    lastOp.insertions,
                    insertions
                ]);
            } else {
                // create a new stack op
                stack.push(new StackItem(transaction.deleteSet, insertions));
                didAdd = true;
            }
            if (!undoing && !redoing) {
                this.lastChange = now;
            }
            // make sure that deleted structs are not gc'd
            iterateDeletedStructs(transaction, transaction.deleteSet, /** @param {Item|GC} item */ (item)=>{
                if (item instanceof Item && this.scope.some((type)=>type === transaction.doc || isParentOf(type, item))) {
                    keepItem(item, true);
                }
            });
            /**
       * @type {[StackItemEvent, UndoManager]}
       */ const changeEvent = [
                {
                    stackItem: stack[stack.length - 1],
                    origin: transaction.origin,
                    type: undoing ? 'redo' : 'undo',
                    changedParentTypes: transaction.changedParentTypes
                },
                this
            ];
            if (didAdd) {
                this.emit('stack-item-added', changeEvent);
            } else {
                this.emit('stack-item-updated', changeEvent);
            }
        };
        this.doc.on('afterTransaction', this.afterTransactionHandler);
        this.doc.on('destroy', ()=>{
            this.destroy();
        });
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 */ function* lazyStructReaderGenerator(decoder) {
    const numOfStateUpdates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
    for(let i = 0; i < numOfStateUpdates; i++){
        const numberOfStructs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        const client = decoder.readClient();
        let clock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
        for(let i = 0; i < numberOfStructs; i++){
            const info = decoder.readInfo();
            // @todo use switch instead of ifs
            if (info === 10) {
                const len = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarUint"](decoder.restDecoder);
                yield new Skip(createID(client, clock), len);
                clock += len;
            } else if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS5"] & info) !== 0) {
                const cantCopyParentInfo = (info & (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"] | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"])) === 0;
                // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
                // and we read the next string as parentYKey.
                // It indicates how we store/retrieve parent from `y.share`
                // @type {string|null}
                const struct = new Item(createID(client, clock), null, (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"] ? decoder.readLeftID() : null, null, (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"] ? decoder.readRightID() : null, // @ts-ignore Force writing a string here.
                cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null, cantCopyParentInfo && (info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT6"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT6"] ? decoder.readString() : null, readItemContent(decoder, info) // item content
                );
                yield struct;
                clock += struct.length;
            } else {
                const len = decoder.readLen();
                yield new GC(createID(client, clock), len);
                clock += len;
            }
        }
    }
}
class LazyStructReader {
    /**
   * @return {Item | GC | Skip |null}
   */ next() {
        // ignore "Skip" structs
        do {
            this.curr = this.gen.next().value || null;
        }while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip)
        return this.curr;
    }
    /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */ constructor(decoder, filterSkips){
        this.gen = lazyStructReaderGenerator(decoder);
        /**
     * @type {null | Item | Skip | GC}
     */ this.curr = null;
        this.done = false;
        this.filterSkips = filterSkips;
        this.next();
    }
}
/**
 * @param {Uint8Array} update
 *
 */ const logUpdate = (update)=>logUpdateV2(update, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 *
 */ const logUpdateV2 = function(update) {
    let YDecoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : UpdateDecoderV2;
    const structs = [];
    const updateDecoder = new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()){
        structs.push(curr);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["print"]('Structs: ', structs);
    const ds = readDeleteSet(updateDecoder);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["print"]('DeleteSet: ', ds);
};
/**
 * @param {Uint8Array} update
 *
 */ const decodeUpdate = (update)=>decodeUpdateV2(update, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 *
 */ const decodeUpdateV2 = function(update) {
    let YDecoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : UpdateDecoderV2;
    const structs = [];
    const updateDecoder = new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()){
        structs.push(curr);
    }
    return {
        structs,
        ds: readDeleteSet(updateDecoder)
    };
};
class LazyStructWriter {
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ constructor(encoder){
        this.currClient = 0;
        this.startClock = 0;
        this.written = 0;
        this.encoder = encoder;
        /**
     * We want to write operations lazily, but also we need to know beforehand how many operations we want to write for each client.
     *
     * This kind of meta-information (#clients, #structs-per-client-written) is written to the restEncoder.
     *
     * We fragment the restEncoder and store a slice of it per-client until we know how many clients there are.
     * When we flush (toUint8Array) we write the restEncoder using the fragments and the meta-information.
     *
     * @type {Array<{ written: number, restEncoder: Uint8Array }>}
     */ this.clientStructs = [];
    }
}
/**
 * @param {Array<Uint8Array>} updates
 * @return {Uint8Array}
 */ const mergeUpdates = (updates)=>mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof DSEncoderV1 | typeof DSEncoderV2} YEncoder
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} YDecoder
 * @return {Uint8Array}
 */ const encodeStateVectorFromUpdateV2 = function(update) {
    let YEncoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DSEncoderV2, YDecoder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : UpdateDecoderV2;
    const encoder = new YEncoder();
    const updateDecoder = new LazyStructReader(new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
        let size = 0;
        let currClient = curr.id.client;
        let stopCounting = curr.id.clock !== 0; // must start at 0
        let currClock = stopCounting ? 0 : curr.id.clock + curr.length;
        for(; curr !== null; curr = updateDecoder.next()){
            if (currClient !== curr.id.client) {
                if (currClock !== 0) {
                    size++;
                    // We found a new client
                    // write what we have to the encoder
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, currClient);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, currClock);
                }
                currClient = curr.id.client;
                currClock = 0;
                stopCounting = curr.id.clock !== 0;
            }
            // we ignore skips
            if (curr.constructor === Skip) {
                stopCounting = true;
            }
            if (!stopCounting) {
                currClock = curr.id.clock + curr.length;
            }
        }
        // write what we have
        if (currClock !== 0) {
            size++;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, currClient);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, currClock);
        }
        // prepend the size of the state vector
        const enc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](enc, size);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBinaryEncoder"](enc, encoder.restEncoder);
        encoder.restEncoder = enc;
        return encoder.toUint8Array();
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, 0);
        return encoder.toUint8Array();
    }
};
/**
 * @param {Uint8Array} update
 * @return {Uint8Array}
 */ const encodeStateVectorFromUpdate = (update)=>encodeStateVectorFromUpdateV2(update, DSEncoderV1, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} YDecoder
 * @return {{ from: Map<number,number>, to: Map<number,number> }}
 */ const parseUpdateMetaV2 = function(update) {
    let YDecoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : UpdateDecoderV2;
    /**
   * @type {Map<number, number>}
   */ const from = new Map();
    /**
   * @type {Map<number, number>}
   */ const to = new Map();
    const updateDecoder = new LazyStructReader(new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
        let currClient = curr.id.client;
        let currClock = curr.id.clock;
        // write the beginning to `from`
        from.set(currClient, currClock);
        for(; curr !== null; curr = updateDecoder.next()){
            if (currClient !== curr.id.client) {
                // We found a new client
                // write the end to `to`
                to.set(currClient, currClock);
                // write the beginning to `from`
                from.set(curr.id.client, curr.id.clock);
                // update currClient
                currClient = curr.id.client;
            }
            currClock = curr.id.clock + curr.length;
        }
        // write the end to `to`
        to.set(currClient, currClock);
    }
    return {
        from,
        to
    };
};
/**
 * @param {Uint8Array} update
 * @return {{ from: Map<number,number>, to: Map<number,number> }}
 */ const parseUpdateMeta = (update)=>parseUpdateMetaV2(update, UpdateDecoderV1);
/**
 * This method is intended to slice any kind of struct and retrieve the right part.
 * It does not handle side-effects, so it should only be used by the lazy-encoder.
 *
 * @param {Item | GC | Skip} left
 * @param {number} diff
 * @return {Item | GC}
 */ const sliceStruct = (left, diff)=>{
    if (left.constructor === GC) {
        const { client, clock } = left.id;
        return new GC(createID(client, clock + diff), left.length - diff);
    } else if (left.constructor === Skip) {
        const { client, clock } = left.id;
        return new Skip(createID(client, clock + diff), left.length - diff);
    } else {
        const leftItem = left;
        const { client, clock } = leftItem.id;
        return new Item(createID(client, clock + diff), null, createID(client, clock + diff - 1), null, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
    }
};
/**
 *
 * This function works similarly to `readUpdateV2`.
 *
 * @param {Array<Uint8Array>} updates
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 * @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
 * @return {Uint8Array}
 */ const mergeUpdatesV2 = function(updates) {
    let YDecoder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : UpdateDecoderV2, YEncoder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : UpdateEncoderV2;
    if (updates.length === 1) {
        return updates[0];
    }
    const updateDecoders = updates.map((update)=>new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update)));
    let lazyStructDecoders = updateDecoders.map((decoder)=>new LazyStructReader(decoder, true));
    /**
   * @todo we don't need offset because we always slice before
   * @type {null | { struct: Item | GC | Skip, offset: number }}
   */ let currWrite = null;
    const updateEncoder = new YEncoder();
    // write structs lazily
    const lazyStructEncoder = new LazyStructWriter(updateEncoder);
    // Note: We need to ensure that all lazyStructDecoders are fully consumed
    // Note: Should merge document updates whenever possible - even from different updates
    // Note: Should handle that some operations cannot be applied yet ()
    while(true){
        // Write higher clients first ⇒ sort by clientID & clock and remove decoders without content
        lazyStructDecoders = lazyStructDecoders.filter((dec)=>dec.curr !== null);
        lazyStructDecoders.sort(/** @type {function(any,any):number} */ (dec1, dec2)=>{
            if (dec1.curr.id.client === dec2.curr.id.client) {
                const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
                if (clockDiff === 0) {
                    // @todo remove references to skip since the structDecoders must filter Skips.
                    return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1 // we are filtering skips anyway.
                    ;
                } else {
                    return clockDiff;
                }
            } else {
                return dec2.curr.id.client - dec1.curr.id.client;
            }
        });
        if (lazyStructDecoders.length === 0) {
            break;
        }
        const currDecoder = lazyStructDecoders[0];
        // write from currDecoder until the next operation is from another client or if filler-struct
        // then we need to reorder the decoders and find the next operation to write
        const firstClient = /** @type {Item | GC} */ currDecoder.curr.id.client;
        if (currWrite !== null) {
            let curr = currDecoder.curr;
            let iterated = false;
            // iterate until we find something that we haven't written already
            // remember: first the high client-ids are written
            while(curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client){
                curr = currDecoder.next();
                iterated = true;
            }
            if (curr === null || // current decoder is empty
            curr.id.client !== firstClient || iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length // the above while loop was used and we are potentially missing updates
            ) {
                continue;
            }
            if (firstClient !== currWrite.struct.id.client) {
                writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                currWrite = {
                    struct: curr,
                    offset: 0
                };
                currDecoder.next();
            } else {
                if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
                    // @todo write currStruct & set currStruct = Skip(clock = currStruct.id.clock + currStruct.length, length = curr.id.clock - self.clock)
                    if (currWrite.struct.constructor === Skip) {
                        // extend existing skip
                        currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
                    } else {
                        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                        const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
                        /**
             * @type {Skip}
             */ const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
                        currWrite = {
                            struct,
                            offset: 0
                        };
                    }
                } else {
                    const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
                    if (diff > 0) {
                        if (currWrite.struct.constructor === Skip) {
                            // prefer to slice Skip because the other struct might contain more information
                            currWrite.struct.length -= diff;
                        } else {
                            curr = sliceStruct(curr, diff);
                        }
                    }
                    if (!currWrite.struct.mergeWith(curr)) {
                        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                        currWrite = {
                            struct: curr,
                            offset: 0
                        };
                        currDecoder.next();
                    }
                }
            }
        } else {
            currWrite = {
                struct: currDecoder.curr,
                offset: 0
            };
            currDecoder.next();
        }
        for(let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()){
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = {
                struct: next,
                offset: 0
            };
        }
    }
    if (currWrite !== null) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = null;
    }
    finishLazyStructWriting(lazyStructEncoder);
    const dss = updateDecoders.map((decoder)=>readDeleteSet(decoder));
    const ds = mergeDeleteSets(dss);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
};
/**
 * @param {Uint8Array} update
 * @param {Uint8Array} sv
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 * @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
 */ const diffUpdateV2 = function(update, sv) {
    let YDecoder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : UpdateDecoderV2, YEncoder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : UpdateEncoderV2;
    const state = decodeStateVector(sv);
    const encoder = new YEncoder();
    const lazyStructWriter = new LazyStructWriter(encoder);
    const decoder = new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update));
    const reader = new LazyStructReader(decoder, false);
    while(reader.curr){
        const curr = reader.curr;
        const currClient = curr.id.client;
        const svClock = state.get(currClient) || 0;
        if (reader.curr.constructor === Skip) {
            // the first written struct shouldn't be a skip
            reader.next();
            continue;
        }
        if (curr.id.clock + curr.length > svClock) {
            writeStructToLazyStructWriter(lazyStructWriter, curr, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](svClock - curr.id.clock, 0));
            reader.next();
            while(reader.curr && reader.curr.id.client === currClient){
                writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
                reader.next();
            }
        } else {
            // read until something new comes up
            while(reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock){
                reader.next();
            }
        }
    }
    finishLazyStructWriting(lazyStructWriter);
    // write ds
    const ds = readDeleteSet(decoder);
    writeDeleteSet(encoder, ds);
    return encoder.toUint8Array();
};
/**
 * @param {Uint8Array} update
 * @param {Uint8Array} sv
 */ const diffUpdate = (update, sv)=>diffUpdateV2(update, sv, UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {LazyStructWriter} lazyWriter
 */ const flushLazyStructWriter = (lazyWriter)=>{
    if (lazyWriter.written > 0) {
        lazyWriter.clientStructs.push({
            written: lazyWriter.written,
            restEncoder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"](lazyWriter.encoder.restEncoder)
        });
        lazyWriter.encoder.restEncoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"]();
        lazyWriter.written = 0;
    }
};
/**
 * @param {LazyStructWriter} lazyWriter
 * @param {Item | GC} struct
 * @param {number} offset
 */ const writeStructToLazyStructWriter = (lazyWriter, struct, offset)=>{
    // flush curr if we start another client
    if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
        flushLazyStructWriter(lazyWriter);
    }
    if (lazyWriter.written === 0) {
        lazyWriter.currClient = struct.id.client;
        // write next client
        lazyWriter.encoder.writeClient(struct.id.client);
        // write startClock
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](lazyWriter.encoder.restEncoder, struct.id.clock + offset);
    }
    struct.write(lazyWriter.encoder, offset);
    lazyWriter.written++;
};
/**
 * Call this function when we collected all parts and want to
 * put all the parts together. After calling this method,
 * you can continue using the UpdateEncoder.
 *
 * @param {LazyStructWriter} lazyWriter
 */ const finishLazyStructWriting = (lazyWriter)=>{
    flushLazyStructWriter(lazyWriter);
    // this is a fresh encoder because we called flushCurr
    const restEncoder = lazyWriter.encoder.restEncoder;
    /**
   * Now we put all the fragments together.
   * This works similarly to `writeClientsStructs`
   */ // write # states that were updated - i.e. the clients
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](restEncoder, lazyWriter.clientStructs.length);
    for(let i = 0; i < lazyWriter.clientStructs.length; i++){
        const partStructs = lazyWriter.clientStructs[i];
        /**
     * Works similarly to `writeStructs`
     */ // write # encoded structs
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](restEncoder, partStructs.written);
        // write the rest of the fragment
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeUint8Array"](restEncoder, partStructs.restEncoder);
    }
};
/**
 * @param {Uint8Array} update
 * @param {function(Item|GC|Skip):Item|GC|Skip} blockTransformer
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} YDecoder
 * @param {typeof UpdateEncoderV2 | typeof UpdateEncoderV1 } YEncoder
 */ const convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder)=>{
    const updateDecoder = new YDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$decoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"](update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    const updateEncoder = new YEncoder();
    const lazyWriter = new LazyStructWriter(updateEncoder);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()){
        writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
    }
    finishLazyStructWriting(lazyWriter);
    const ds = readDeleteSet(updateDecoder);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
};
/**
 * @typedef {Object} ObfuscatorOptions
 * @property {boolean} [ObfuscatorOptions.formatting=true]
 * @property {boolean} [ObfuscatorOptions.subdocs=true]
 * @property {boolean} [ObfuscatorOptions.yxml=true] Whether to obfuscate nodeName / hookName
 */ /**
 * @param {ObfuscatorOptions} obfuscator
 */ const createObfuscator = function() {
    let { formatting = true, subdocs = true, yxml = true } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let i = 0;
    const mapKeyCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    const nodeNameCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    const formattingKeyCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    const formattingValueCache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    formattingValueCache.set(null, null); // end of a formatting range should always be the end of a formatting range
    /**
   * @param {Item|GC|Skip} block
   * @return {Item|GC|Skip}
   */ return (block)=>{
        switch(block.constructor){
            case GC:
            case Skip:
                return block;
            case Item:
                {
                    const item = block;
                    const content = item.content;
                    switch(content.constructor){
                        case ContentDeleted:
                            break;
                        case ContentType:
                            {
                                if (yxml) {
                                    const type = /** @type {ContentType} */ content.type;
                                    if (type instanceof YXmlElement) {
                                        type.nodeName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](nodeNameCache, type.nodeName, ()=>'node-' + i);
                                    }
                                    if (type instanceof YXmlHook) {
                                        type.hookName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](nodeNameCache, type.hookName, ()=>'hook-' + i);
                                    }
                                }
                                break;
                            }
                        case ContentAny:
                            {
                                const c = content;
                                c.arr = c.arr.map(()=>i);
                                break;
                            }
                        case ContentBinary:
                            {
                                const c = content;
                                c.content = new Uint8Array([
                                    i
                                ]);
                                break;
                            }
                        case ContentDoc:
                            {
                                const c = content;
                                if (subdocs) {
                                    c.opts = {};
                                    c.doc.guid = i + '';
                                }
                                break;
                            }
                        case ContentEmbed:
                            {
                                const c = content;
                                c.embed = {};
                                break;
                            }
                        case ContentFormat:
                            {
                                const c = content;
                                if (formatting) {
                                    c.key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](formattingKeyCache, c.key, ()=>i + '');
                                    c.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](formattingValueCache, c.value, ()=>({
                                            i
                                        }));
                                }
                                break;
                            }
                        case ContentJSON:
                            {
                                const c = content;
                                c.arr = c.arr.map(()=>i);
                                break;
                            }
                        case ContentString:
                            {
                                const c = content;
                                c.str = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repeat"](i % 10 + '', c.str.length);
                                break;
                            }
                        default:
                            // unknown content type
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
                    }
                    if (item.parentSub) {
                        item.parentSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](mapKeyCache, item.parentSub, ()=>i + '');
                    }
                    i++;
                    return block;
                }
            default:
                // unknown block-type
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
    };
};
/**
 * This function obfuscates the content of a Yjs update. This is useful to share
 * buggy Yjs documents while significantly limiting the possibility that a
 * developer can on the user. Note that it might still be possible to deduce
 * some information by analyzing the "structure" of the document or by analyzing
 * the typing behavior using the CRDT-related metadata that is still kept fully
 * intact.
 *
 * @param {Uint8Array} update
 * @param {ObfuscatorOptions} [opts]
 */ const obfuscateUpdate = (update, opts)=>convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {Uint8Array} update
 * @param {ObfuscatorOptions} [opts]
 */ const obfuscateUpdateV2 = (update, opts)=>convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV2, UpdateEncoderV2);
/**
 * @param {Uint8Array} update
 */ const convertUpdateFormatV1ToV2 = (update)=>convertUpdateFormat(update, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"], UpdateDecoderV1, UpdateEncoderV2);
/**
 * @param {Uint8Array} update
 */ const convertUpdateFormatV2ToV1 = (update)=>convertUpdateFormat(update, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["id"], UpdateDecoderV2, UpdateEncoderV1);
const errorComputeChanges = 'You must not compute changes after the event-handler fired.';
/**
 * @template {AbstractType<any>} T
 * YEvent describes the changes on a YType.
 */ class YEvent {
    /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */ get path() {
        return this._path || (this._path = getPathTo(this.currentTarget, this.target));
    }
    /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */ deletes(struct) {
        return isDeleted(this.transaction.deleteSet, struct.id);
    }
    /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */ get keys() {
        if (this._keys === null) {
            if (this.transaction.doc._transactionCleanups.length === 0) {
                throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"](errorComputeChanges);
            }
            const keys = new Map();
            const target = this.target;
            const changed = this.transaction.changed.get(target);
            changed.forEach((key)=>{
                if (key !== null) {
                    const item = target._map.get(key);
                    /**
           * @type {'delete' | 'add' | 'update'}
           */ let action;
                    let oldValue;
                    if (this.adds(item)) {
                        let prev = item.left;
                        while(prev !== null && this.adds(prev)){
                            prev = prev.left;
                        }
                        if (this.deletes(item)) {
                            if (prev !== null && this.deletes(prev)) {
                                action = 'delete';
                                oldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](prev.content.getContent());
                            } else {
                                return;
                            }
                        } else {
                            if (prev !== null && this.deletes(prev)) {
                                action = 'update';
                                oldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](prev.content.getContent());
                            } else {
                                action = 'add';
                                oldValue = undefined;
                            }
                        }
                    } else {
                        if (this.deletes(item)) {
                            action = 'delete';
                            oldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"](/** @type {Item} */ item.content.getContent());
                        } else {
                            return; // nop
                        }
                    }
                    keys.set(key, {
                        action,
                        oldValue
                    });
                }
            });
            this._keys = keys;
        }
        return this._keys;
    }
    /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */ get delta() {
        return this.changes.delta;
    }
    /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */ adds(struct) {
        return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
    }
    /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */ get changes() {
        let changes = this._changes;
        if (changes === null) {
            if (this.transaction.doc._transactionCleanups.length === 0) {
                throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"](errorComputeChanges);
            }
            const target = this.target;
            const added = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
            const deleted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
            /**
       * @type {Array<{insert:Array<any>}|{delete:number}|{retain:number}>}
       */ const delta = [];
            changes = {
                added,
                deleted,
                delta,
                keys: this.keys
            };
            const changed = this.transaction.changed.get(target);
            if (changed.has(null)) {
                /**
         * @type {any}
         */ let lastOp = null;
                const packOp = ()=>{
                    if (lastOp) {
                        delta.push(lastOp);
                    }
                };
                for(let item = target._start; item !== null; item = item.right){
                    if (item.deleted) {
                        if (this.deletes(item) && !this.adds(item)) {
                            if (lastOp === null || lastOp.delete === undefined) {
                                packOp();
                                lastOp = {
                                    delete: 0
                                };
                            }
                            lastOp.delete += item.length;
                            deleted.add(item);
                        } // else nop
                    } else {
                        if (this.adds(item)) {
                            if (lastOp === null || lastOp.insert === undefined) {
                                packOp();
                                lastOp = {
                                    insert: []
                                };
                            }
                            lastOp.insert = lastOp.insert.concat(item.content.getContent());
                            added.add(item);
                        } else {
                            if (lastOp === null || lastOp.retain === undefined) {
                                packOp();
                                lastOp = {
                                    retain: 0
                                };
                            }
                            lastOp.retain += item.length;
                        }
                    }
                }
                if (lastOp !== null && lastOp.retain === undefined) {
                    packOp();
                }
            }
            this._changes = changes;
        }
        return changes;
    }
    /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */ constructor(target, transaction){
        /**
     * The type on which this event was created on.
     * @type {T}
     */ this.target = target;
        /**
     * The current target on which the observe callback is called.
     * @type {AbstractType<any>}
     */ this.currentTarget = target;
        /**
     * The transaction that triggered this event.
     * @type {Transaction}
     */ this.transaction = transaction;
        /**
     * @type {Object|null}
     */ this._changes = null;
        /**
     * @type {null | Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
     */ this._keys = null;
        /**
     * @type {null | Array<{ insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any> }>}
     */ this._delta = null;
        /**
     * @type {Array<string|number>|null}
     */ this._path = null;
    }
}
/**
 * Compute the path from this type to the specified target.
 *
 * @example
 *   // `child` should be accessible via `type.get(path[0]).get(path[1])..`
 *   const path = type.getPathTo(child)
 *   // assuming `type instanceof YArray`
 *   console.log(path) // might look like => [2, 'key1']
 *   child === type.get(path[0]).get(path[1])
 *
 * @param {AbstractType<any>} parent
 * @param {AbstractType<any>} child target
 * @return {Array<string|number>} Path to the target
 *
 * @private
 * @function
 */ const getPathTo = (parent, child)=>{
    const path = [];
    while(child._item !== null && child !== parent){
        if (child._item.parentSub !== null) {
            // parent is map-ish
            path.unshift(child._item.parentSub);
        } else {
            // parent is array-ish
            let i = 0;
            let c = /** @type {AbstractType<any>} */ child._item.parent._start;
            while(c !== child._item && c !== null){
                if (!c.deleted && c.countable) {
                    i += c.length;
                }
                c = c.right;
            }
            path.unshift(i);
        }
        child = child._item.parent;
    }
    return path;
};
/**
 * https://docs.yjs.dev/getting-started/working-with-shared-types#caveats
 */ const warnPrematureAccess = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warn"]('Invalid access: Add Yjs type to a document before reading data.');
};
const maxSearchMarker = 80;
/**
 * A unique timestamp that identifies each marker.
 *
 * Time is relative,.. this is more like an ever-increasing clock.
 *
 * @type {number}
 */ let globalSearchMarkerTimestamp = 0;
class ArraySearchMarker {
    /**
   * @param {Item} p
   * @param {number} index
   */ constructor(p, index){
        p.marker = true;
        this.p = p;
        this.index = index;
        this.timestamp = globalSearchMarkerTimestamp++;
    }
}
/**
 * @param {ArraySearchMarker} marker
 */ const refreshMarkerTimestamp = (marker)=>{
    marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
 * This is rather complex so this function is the only thing that should overwrite a marker
 *
 * @param {ArraySearchMarker} marker
 * @param {Item} p
 * @param {number} index
 */ const overwriteMarker = (marker, p, index)=>{
    marker.p.marker = false;
    marker.p = p;
    p.marker = true;
    marker.index = index;
    marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
 * @param {Array<ArraySearchMarker>} searchMarker
 * @param {Item} p
 * @param {number} index
 */ const markPosition = (searchMarker, p, index)=>{
    if (searchMarker.length >= maxSearchMarker) {
        // override oldest marker (we don't want to create more objects)
        const marker = searchMarker.reduce((a, b)=>a.timestamp < b.timestamp ? a : b);
        overwriteMarker(marker, p, index);
        return marker;
    } else {
        // create new marker
        const pm = new ArraySearchMarker(p, index);
        searchMarker.push(pm);
        return pm;
    }
};
/**
 * Search marker help us to find positions in the associative array faster.
 *
 * They speed up the process of finding a position without much bookkeeping.
 *
 * A maximum of `maxSearchMarker` objects are created.
 *
 * This function always returns a refreshed marker (updated timestamp)
 *
 * @param {AbstractType<any>} yarray
 * @param {number} index
 */ const findMarker = (yarray, index)=>{
    if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
        return null;
    }
    const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"](index - a.index) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"](index - b.index) ? a : b);
    let p = yarray._start;
    let pindex = 0;
    if (marker !== null) {
        p = marker.p;
        pindex = marker.index;
        refreshMarkerTimestamp(marker); // we used it, we might need to use it again
    }
    // iterate to right if possible
    while(p.right !== null && pindex < index){
        if (!p.deleted && p.countable) {
            if (index < pindex + p.length) {
                break;
            }
            pindex += p.length;
        }
        p = p.right;
    }
    // iterate to left if necessary (might be that pindex > index)
    while(p.left !== null && pindex > index){
        p = p.left;
        if (!p.deleted && p.countable) {
            pindex -= p.length;
        }
    }
    // we want to make sure that p can't be merged with left, because that would screw up everything
    // in that cas just return what we have (it is most likely the best marker anyway)
    // iterate to left until p can't be merged with left
    while(p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock){
        p = p.left;
        if (!p.deleted && p.countable) {
            pindex -= p.length;
        }
    }
    // @todo remove!
    // assure position
    // {
    //   let start = yarray._start
    //   let pos = 0
    //   while (start !== p) {
    //     if (!start.deleted && start.countable) {
    //       pos += start.length
    //     }
    //     start = /** @type {Item} */ (start.right)
    //   }
    //   if (pos !== pindex) {
    //     debugger
    //     throw new Error('Gotcha position fail!')
    //   }
    // }
    // if (marker) {
    //   if (window.lengths == null) {
    //     window.lengths = []
    //     window.getLengths = () => window.lengths.sort((a, b) => a - b)
    //   }
    //   window.lengths.push(marker.index - pindex)
    //   console.log('distance', marker.index - pindex, 'len', p && p.parent.length)
    // }
    if (marker !== null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"](marker.index - pindex) < /** @type {YText|YArray<any>} */ p.parent.length / maxSearchMarker) {
        // adjust existing marker
        overwriteMarker(marker, p, pindex);
        return marker;
    } else {
        // create new marker
        return markPosition(yarray._searchMarker, p, pindex);
    }
};
/**
 * Update markers when a change happened.
 *
 * This should be called before doing a deletion!
 *
 * @param {Array<ArraySearchMarker>} searchMarker
 * @param {number} index
 * @param {number} len If insertion, len is positive. If deletion, len is negative.
 */ const updateMarkerChanges = (searchMarker, index, len)=>{
    for(let i = searchMarker.length - 1; i >= 0; i--){
        const m = searchMarker[i];
        if (len > 0) {
            /**
       * @type {Item|null}
       */ let p = m.p;
            p.marker = false;
            // Ideally we just want to do a simple position comparison, but this will only work if
            // search markers don't point to deleted items for formats.
            // Iterate marker to prev undeleted countable position so we know what to do when updating a position
            while(p && (p.deleted || !p.countable)){
                p = p.left;
                if (p && !p.deleted && p.countable) {
                    // adjust position. the loop should break now
                    m.index -= p.length;
                }
            }
            if (p === null || p.marker === true) {
                // remove search marker if updated position is null or if position is already marked
                searchMarker.splice(i, 1);
                continue;
            }
            m.p = p;
            p.marker = true;
        }
        if (index < m.index || len > 0 && index === m.index) {
            m.index = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](index, m.index + len);
        }
    }
};
/**
 * Accumulate all (list) children of a type and return them as an Array.
 *
 * @param {AbstractType<any>} t
 * @return {Array<Item>}
 */ const getTypeChildren = (t)=>{
    var _t_doc;
    (_t_doc = t.doc) !== null && _t_doc !== void 0 ? _t_doc : warnPrematureAccess();
    let s = t._start;
    const arr = [];
    while(s){
        arr.push(s);
        s = s.right;
    }
    return arr;
};
/**
 * Call event listeners with an event. This will also add an event to all
 * parents (for `.observeDeep` handlers).
 *
 * @template EventType
 * @param {AbstractType<EventType>} type
 * @param {Transaction} transaction
 * @param {EventType} event
 */ const callTypeObservers = (type, transaction, event)=>{
    const changedType = type;
    const changedParentTypes = transaction.changedParentTypes;
    while(true){
        // @ts-ignore
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIfUndefined"](changedParentTypes, type, ()=>[]).push(event);
        if (type._item === null) {
            break;
        }
        type = type._item.parent;
    }
    callEventHandlerListeners(changedType._eH, event, transaction);
};
/**
 * @template EventType
 * Abstract Yjs Type class
 */ class AbstractType {
    /**
   * @return {AbstractType<any>|null}
   */ get parent() {
        return this._item ? this._item.parent : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */ _integrate(y, item) {
        this.doc = y;
        this._item = item;
    }
    /**
   * @return {AbstractType<EventType>}
   */ _copy() {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */ clone() {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */ _write(_encoder) {}
    /**
   * The first non-deleted item
   */ get _first() {
        let n = this._start;
        while(n !== null && n.deleted){
            n = n.right;
        }
        return n;
    }
    /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, _parentSubs) {
        if (!transaction.local && this._searchMarker) {
            this._searchMarker.length = 0;
        }
    }
    /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */ observe(f) {
        addEventHandlerListener(this._eH, f);
    }
    /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */ observeDeep(f) {
        addEventHandlerListener(this._dEH, f);
    }
    /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */ unobserve(f) {
        removeEventHandlerListener(this._eH, f);
    }
    /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */ unobserveDeep(f) {
        removeEventHandlerListener(this._dEH, f);
    }
    /**
   * @abstract
   * @return {any}
   */ toJSON() {}
    constructor(){
        /**
     * @type {Item|null}
     */ this._item = null;
        /**
     * @type {Map<string,Item>}
     */ this._map = new Map();
        /**
     * @type {Item|null}
     */ this._start = null;
        /**
     * @type {Doc|null}
     */ this.doc = null;
        this._length = 0;
        /**
     * Event handlers
     * @type {EventHandler<EventType,Transaction>}
     */ this._eH = createEventHandler();
        /**
     * Deep event handlers
     * @type {EventHandler<Array<YEvent<any>>,Transaction>}
     */ this._dEH = createEventHandler();
        /**
     * @type {null | Array<ArraySearchMarker>}
     */ this._searchMarker = null;
    }
}
/**
 * @param {AbstractType<any>} type
 * @param {number} start
 * @param {number} end
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListSlice = (type, start, end)=>{
    var _type_doc;
    (_type_doc = type.doc) !== null && _type_doc !== void 0 ? _type_doc : warnPrematureAccess();
    if (start < 0) {
        start = type._length + start;
    }
    if (end < 0) {
        end = type._length + end;
    }
    let len = end - start;
    const cs = [];
    let n = type._start;
    while(n !== null && len > 0){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            if (c.length <= start) {
                start -= c.length;
            } else {
                for(let i = start; i < c.length && len > 0; i++){
                    cs.push(c[i]);
                    len--;
                }
                start = 0;
            }
        }
        n = n.right;
    }
    return cs;
};
/**
 * @param {AbstractType<any>} type
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListToArray = (type)=>{
    var _type_doc;
    (_type_doc = type.doc) !== null && _type_doc !== void 0 ? _type_doc : warnPrematureAccess();
    const cs = [];
    let n = type._start;
    while(n !== null){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++){
                cs.push(c[i]);
            }
        }
        n = n.right;
    }
    return cs;
};
/**
 * @param {AbstractType<any>} type
 * @param {Snapshot} snapshot
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListToArraySnapshot = (type, snapshot)=>{
    const cs = [];
    let n = type._start;
    while(n !== null){
        if (n.countable && isVisible(n, snapshot)) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++){
                cs.push(c[i]);
            }
        }
        n = n.right;
    }
    return cs;
};
/**
 * Executes a provided function on once on every element of this YArray.
 *
 * @param {AbstractType<any>} type
 * @param {function(any,number,any):void} f A function to execute on every element of this YArray.
 *
 * @private
 * @function
 */ const typeListForEach = (type, f)=>{
    let index = 0;
    let n = type._start;
    var _type_doc;
    (_type_doc = type.doc) !== null && _type_doc !== void 0 ? _type_doc : warnPrematureAccess();
    while(n !== null){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++){
                f(c[i], index++, type);
            }
        }
        n = n.right;
    }
};
/**
 * @template C,R
 * @param {AbstractType<any>} type
 * @param {function(C,number,AbstractType<any>):R} f
 * @return {Array<R>}
 *
 * @private
 * @function
 */ const typeListMap = (type, f)=>{
    /**
   * @type {Array<any>}
   */ const result = [];
    typeListForEach(type, (c, i)=>{
        result.push(f(c, i, type));
    });
    return result;
};
/**
 * @param {AbstractType<any>} type
 * @return {IterableIterator<any>}
 *
 * @private
 * @function
 */ const typeListCreateIterator = (type)=>{
    let n = type._start;
    /**
   * @type {Array<any>|null}
   */ let currentContent = null;
    let currentContentIndex = 0;
    return {
        [Symbol.iterator] () {
            return this;
        },
        next: ()=>{
            // find some content
            if (currentContent === null) {
                while(n !== null && n.deleted){
                    n = n.right;
                }
                // check if we reached the end, no need to check currentContent, because it does not exist
                if (n === null) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                // we found n, so we can set currentContent
                currentContent = n.content.getContent();
                currentContentIndex = 0;
                n = n.right; // we used the content of n, now iterate to next
            }
            const value = currentContent[currentContentIndex++];
            // check if we need to empty currentContent
            if (currentContent.length <= currentContentIndex) {
                currentContent = null;
            }
            return {
                done: false,
                value
            };
        }
    };
};
/**
 * @param {AbstractType<any>} type
 * @param {number} index
 * @return {any}
 *
 * @private
 * @function
 */ const typeListGet = (type, index)=>{
    var _type_doc;
    (_type_doc = type.doc) !== null && _type_doc !== void 0 ? _type_doc : warnPrematureAccess();
    const marker = findMarker(type, index);
    let n = type._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
    }
    for(; n !== null; n = n.right){
        if (!n.deleted && n.countable) {
            if (index < n.length) {
                return n.content.getContent()[index];
            }
            index -= n.length;
        }
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {Item?} referenceItem
 * @param {Array<Object<string,any>|Array<any>|boolean|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content)=>{
    let left = referenceItem;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const store = doc.store;
    const right = referenceItem === null ? parent._start : referenceItem.right;
    /**
   * @type {Array<Object|Array<any>|number|null>}
   */ let jsonContent = [];
    const packJsonContent = ()=>{
        if (jsonContent.length > 0) {
            left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
            left.integrate(transaction, 0);
            jsonContent = [];
        }
    };
    content.forEach((c)=>{
        if (c === null) {
            jsonContent.push(c);
        } else {
            switch(c.constructor){
                case Number:
                case Object:
                case Boolean:
                case Array:
                case String:
                    jsonContent.push(c);
                    break;
                default:
                    packJsonContent();
                    switch(c.constructor){
                        case Uint8Array:
                        case ArrayBuffer:
                            left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(c)));
                            left.integrate(transaction, 0);
                            break;
                        case Doc:
                            left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(c));
                            left.integrate(transaction, 0);
                            break;
                        default:
                            if (c instanceof AbstractType) {
                                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                                left.integrate(transaction, 0);
                            } else {
                                throw new Error('Unexpected content type in insert operation');
                            }
                    }
            }
        }
    });
    packJsonContent();
};
const lengthExceeded = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]('Length exceeded!');
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListInsertGenerics = (transaction, parent, index, content)=>{
    if (index > parent._length) {
        throw lengthExceeded();
    }
    if (index === 0) {
        if (parent._searchMarker) {
            updateMarkerChanges(parent._searchMarker, index, content.length);
        }
        return typeListInsertGenericsAfter(transaction, parent, null, content);
    }
    const startIndex = index;
    const marker = findMarker(parent, index);
    let n = parent._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
        // we need to iterate one to the left so that the algorithm works
        if (index === 0) {
            // @todo refactor this as it actually doesn't consider formats
            n = n.prev; // important! get the left undeleted item so that we can actually decrease index
            index += n && n.countable && !n.deleted ? n.length : 0;
        }
    }
    for(; n !== null; n = n.right){
        if (!n.deleted && n.countable) {
            if (index <= n.length) {
                if (index < n.length) {
                    // insert in-between
                    getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
                }
                break;
            }
            index -= n.length;
        }
    }
    if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, startIndex, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
 * Pushing content is special as we generally want to push after the last item. So we don't have to update
 * the search marker.
 *
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListPushGenerics = (transaction, parent, content)=>{
    // Use the marker with the highest index and iterate to the right.
    const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker)=>currMarker.index > maxMarker.index ? currMarker : maxMarker, {
        index: 0,
        p: parent._start
    });
    let n = marker.p;
    if (n) {
        while(n.right){
            n = n.right;
        }
    }
    return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {number} length
 *
 * @private
 * @function
 */ const typeListDelete = (transaction, parent, index, length)=>{
    if (length === 0) {
        return;
    }
    const startIndex = index;
    const startLength = length;
    const marker = findMarker(parent, index);
    let n = parent._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
    }
    // compute the first item to be deleted
    for(; n !== null && index > 0; n = n.right){
        if (!n.deleted && n.countable) {
            if (index < n.length) {
                getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
            }
            index -= n.length;
        }
    }
    // delete all items until done
    while(length > 0 && n !== null){
        if (!n.deleted) {
            if (length < n.length) {
                getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length));
            }
            n.delete(transaction);
            length -= n.length;
        }
        n = n.right;
    }
    if (length > 0) {
        throw lengthExceeded();
    }
    if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length /* in case we remove the above exception */ );
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {string} key
 *
 * @private
 * @function
 */ const typeMapDelete = (transaction, parent, key)=>{
    const c = parent._map.get(key);
    if (c !== undefined) {
        c.delete(transaction);
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @param {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} value
 *
 * @private
 * @function
 */ const typeMapSet = (transaction, parent, key, value)=>{
    const left = parent._map.get(key) || null;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    let content;
    if (value == null) {
        content = new ContentAny([
            value
        ]);
    } else {
        switch(value.constructor){
            case Number:
            case Object:
            case Boolean:
            case Array:
            case String:
            case Date:
            case BigInt:
                content = new ContentAny([
                    value
                ]);
                break;
            case Uint8Array:
                content = new ContentBinary(value);
                break;
            case Doc:
                content = new ContentDoc(value);
                break;
            default:
                if (value instanceof AbstractType) {
                    content = new ContentType(value);
                } else {
                    throw new Error('Unexpected content type');
                }
        }
    }
    new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
 *
 * @private
 * @function
 */ const typeMapGet = (parent, key)=>{
    var _parent_doc;
    (_parent_doc = parent.doc) !== null && _parent_doc !== void 0 ? _parent_doc : warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== undefined && !val.deleted ? val.content.getContent()[val.length - 1] : undefined;
};
/**
 * @param {AbstractType<any>} parent
 * @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
 *
 * @private
 * @function
 */ const typeMapGetAll = (parent)=>{
    /**
   * @type {Object<string,any>}
   */ const res = {};
    var _parent_doc;
    (_parent_doc = parent.doc) !== null && _parent_doc !== void 0 ? _parent_doc : warnPrematureAccess();
    parent._map.forEach((value, key)=>{
        if (!value.deleted) {
            res[key] = value.content.getContent()[value.length - 1];
        }
    });
    return res;
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @return {boolean}
 *
 * @private
 * @function
 */ const typeMapHas = (parent, key)=>{
    var _parent_doc;
    (_parent_doc = parent.doc) !== null && _parent_doc !== void 0 ? _parent_doc : warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== undefined && !val.deleted;
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @param {Snapshot} snapshot
 * @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
 *
 * @private
 * @function
 */ const typeMapGetSnapshot = (parent, key, snapshot)=>{
    let v = parent._map.get(key) || null;
    while(v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))){
        v = v.left;
    }
    return v !== null && isVisible(v, snapshot) ? v.content.getContent()[v.length - 1] : undefined;
};
/**
 * @param {AbstractType<any>} parent
 * @param {Snapshot} snapshot
 * @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
 *
 * @private
 * @function
 */ const typeMapGetAllSnapshot = (parent, snapshot)=>{
    /**
   * @type {Object<string,any>}
   */ const res = {};
    parent._map.forEach((value, key)=>{
        /**
     * @type {Item|null}
     */ let v = value;
        while(v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))){
            v = v.left;
        }
        if (v !== null && isVisible(v, snapshot)) {
            res[key] = v.content.getContent()[v.length - 1];
        }
    });
    return res;
};
/**
 * @param {AbstractType<any> & { _map: Map<string, Item> }} type
 * @return {IterableIterator<Array<any>>}
 *
 * @private
 * @function
 */ const createMapIterator = (type)=>{
    var _type_doc;
    (_type_doc = type.doc) !== null && _type_doc !== void 0 ? _type_doc : warnPrematureAccess();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFilter"](type._map.entries(), /** @param {any} entry */ (entry)=>!entry[1].deleted);
};
/**
 * @module YArray
 */ /**
 * Event that describes the changes on a YArray
 * @template T
 * @extends YEvent<YArray<T>>
 */ class YArrayEvent extends YEvent {
}
/**
 * A shared Array implementation.
 * @template T
 * @extends AbstractType<YArrayEvent<T>>
 * @implements {Iterable<T>}
 */ class YArray extends AbstractType {
    /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */ static from(items) {
        /**
     * @type {YArray<T>}
     */ const a = new YArray();
        a.push(items);
        return a;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        this.insert(0, this._prelimContent);
        this._prelimContent = null;
    }
    /**
   * @return {YArray<T>}
   */ _copy() {
        return new YArray();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */ clone() {
        /**
     * @type {YArray<T>}
     */ const arr = new YArray();
        arr.insert(0, this.toArray().map((el)=>el instanceof AbstractType ? el.clone() : el));
        return arr;
    }
    get length() {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        return this._length;
    }
    /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
    }
    /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */ insert(index, content) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeListInsertGenerics(transaction, this, index, content);
            });
        } else {
            /** @type {Array<any>} */ this._prelimContent.splice(index, 0, ...content);
        }
    }
    /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */ push(content) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeListPushGenerics(transaction, this, content);
            });
        } else {
            /** @type {Array<any>} */ this._prelimContent.push(...content);
        }
    }
    /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */ unshift(content) {
        this.insert(0, content);
    }
    /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */ delete(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeListDelete(transaction, this, index, length);
            });
        } else {
            /** @type {Array<any>} */ this._prelimContent.splice(index, length);
        }
    }
    /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */ get(index) {
        return typeListGet(this, index);
    }
    /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */ toArray() {
        return typeListToArray(this);
    }
    /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */ slice() {
        let start = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.length;
        return typeListSlice(this, start, end);
    }
    /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */ toJSON() {
        return this.map((c)=>c instanceof AbstractType ? c.toJSON() : c);
    }
    /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */ map(f) {
        return typeListMap(this, f);
    }
    /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        typeListForEach(this, f);
    }
    /**
   * @return {IterableIterator<T>}
   */ [Symbol.iterator]() {
        return typeListCreateIterator(this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YArrayRefID);
    }
    constructor(){
        super();
        /**
     * @type {Array<any>?}
     * @private
     */ this._prelimContent = [];
        /**
     * @type {Array<ArraySearchMarker>}
     */ this._searchMarker = [];
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 *
 * @private
 * @function
 */ const readYArray = (_decoder)=>new YArray();
/**
 * @module YMap
 */ /**
 * @template T
 * @extends YEvent<YMap<T>>
 * Event that describes the changes on a YMap.
 */ class YMapEvent extends YEvent {
    /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */ constructor(ymap, transaction, subs){
        super(ymap, transaction);
        this.keysChanged = subs;
    }
}
/**
 * @template MapType
 * A shared Map implementation.
 *
 * @extends AbstractType<YMapEvent<MapType>>
 * @implements {Iterable<[string, MapType]>}
 */ class YMap extends AbstractType {
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item); /** @type {Map<string, any>} */ 
        this._prelimContent.forEach((value, key)=>{
            this.set(key, value);
        });
        this._prelimContent = null;
    }
    /**
   * @return {YMap<MapType>}
   */ _copy() {
        return new YMap();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */ clone() {
        /**
     * @type {YMap<MapType>}
     */ const map = new YMap();
        this.forEach((value, key)=>{
            map.set(key, value instanceof AbstractType ? value.clone() : value);
        });
        return map;
    }
    /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
    }
    /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */ toJSON() {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        /**
     * @type {Object<string,MapType>}
     */ const map = {};
        this._map.forEach((item, key)=>{
            if (!item.deleted) {
                const v = item.content.getContent()[item.length - 1];
                map[key] = v instanceof AbstractType ? v.toJSON() : v;
            }
        });
        return map;
    }
    /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */ get size() {
        return [
            ...createMapIterator(this)
        ].length;
    }
    /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */ keys() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorMap"](createMapIterator(this), /** @param {any} v */ (v)=>v[0]);
    }
    /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */ values() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorMap"](createMapIterator(this), /** @param {any} v */ (v)=>v[1].content.getContent()[v[1].length - 1]);
    }
    /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */ entries() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorMap"](createMapIterator(this), /** @param {any} v */ (v)=>[
                v[0],
                v[1].content.getContent()[v[1].length - 1]
            ]);
    }
    /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        this._map.forEach((item, key)=>{
            if (!item.deleted) {
                f(item.content.getContent()[item.length - 1], key, this);
            }
        });
    }
    /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */ delete(key) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapDelete(transaction, this, key);
            });
        } else {
            /** @type {Map<string, any>} */ this._prelimContent.delete(key);
        }
    }
    /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */ set(key, value) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapSet(transaction, this, key, value);
            });
        } else {
            /** @type {Map<string, any>} */ this._prelimContent.set(key, value);
        }
        return value;
    }
    /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */ get(key) {
        return typeMapGet(this, key);
    }
    /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */ has(key) {
        return typeMapHas(this, key);
    }
    /**
   * Removes all elements from this YMap.
   */ clear() {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                this.forEach(function(_value, key, map) {
                    typeMapDelete(transaction, map, key);
                });
            });
        } else {
            /** @type {Map<string, any>} */ this._prelimContent.clear();
        }
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YMapRefID);
    }
    /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */ constructor(entries){
        super();
        /**
     * @type {Map<string,any>?}
     * @private
     */ this._prelimContent = null;
        if (entries === undefined) {
            this._prelimContent = new Map();
        } else {
            this._prelimContent = new Map(entries);
        }
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 *
 * @private
 * @function
 */ const readYMap = (_decoder)=>new YMap();
/**
 * @module YText
 */ /**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */ const equalAttrs = (a, b)=>a === b || typeof a === 'object' && typeof b === 'object' && a && b && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equalFlat"](a, b);
class ItemTextListPosition {
    /**
   * Only call this if you know that this.right is defined
   */ forward() {
        if (this.right === null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        switch(this.right.content.constructor){
            case ContentFormat:
                if (!this.right.deleted) {
                    updateCurrentAttributes(this.currentAttributes, this.right.content);
                }
                break;
            default:
                if (!this.right.deleted) {
                    this.index += this.right.length;
                }
                break;
        }
        this.left = this.right;
        this.right = this.right.right;
    }
    /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */ constructor(left, right, index, currentAttributes){
        this.left = left;
        this.right = right;
        this.index = index;
        this.currentAttributes = currentAttributes;
    }
}
/**
 * @param {Transaction} transaction
 * @param {ItemTextListPosition} pos
 * @param {number} count steps to move forward
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const findNextPosition = (transaction, pos, count)=>{
    while(pos.right !== null && count > 0){
        switch(pos.right.content.constructor){
            case ContentFormat:
                if (!pos.right.deleted) {
                    updateCurrentAttributes(pos.currentAttributes, pos.right.content);
                }
                break;
            default:
                if (!pos.right.deleted) {
                    if (count < pos.right.length) {
                        // split right
                        getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
                    }
                    pos.index += pos.right.length;
                    count -= pos.right.length;
                }
                break;
        }
        pos.left = pos.right;
        pos.right = pos.right.right;
    // pos.forward() - we don't forward because that would halve the performance because we already do the checks above
    }
    return pos;
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {boolean} useSearchMarker
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const findPosition = (transaction, parent, index, useSearchMarker)=>{
    const currentAttributes = new Map();
    const marker = useSearchMarker ? findMarker(parent, index) : null;
    if (marker) {
        const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
        return findNextPosition(transaction, pos, index - marker.index);
    } else {
        const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
        return findNextPosition(transaction, pos, index);
    }
};
/**
 * Negate applied formats
 *
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {Map<string,any>} negatedAttributes
 *
 * @private
 * @function
 */ const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes)=>{
    // check if we really need to remove attributes
    while(currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(negatedAttributes.get(/** @type {ContentFormat} */ currPos.right.content.key), /** @type {ContentFormat} */ currPos.right.content.value))){
        if (!currPos.right.deleted) {
            negatedAttributes.delete(/** @type {ContentFormat} */ currPos.right.content.key);
        }
        currPos.forward();
    }
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    negatedAttributes.forEach((val, key)=>{
        const left = currPos.left;
        const right = currPos.right;
        const nextFormat = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
        nextFormat.integrate(transaction, 0);
        currPos.right = nextFormat;
        currPos.forward();
    });
};
/**
 * @param {Map<string,any>} currentAttributes
 * @param {ContentFormat} format
 *
 * @private
 * @function
 */ const updateCurrentAttributes = (currentAttributes, format)=>{
    const { key, value } = format;
    if (value === null) {
        currentAttributes.delete(key);
    } else {
        currentAttributes.set(key, value);
    }
};
/**
 * @param {ItemTextListPosition} currPos
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 */ const minimizeAttributeChanges = (currPos, attributes)=>{
    // go right while attributes[right.key] === right.value (or right is deleted)
    while(true){
        var _attributes__key;
        if (currPos.right === null) {
            break;
        } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs((_attributes__key = attributes[currPos.right.content.key]) !== null && _attributes__key !== void 0 ? _attributes__key : null, /** @type {ContentFormat} */ currPos.right.content.value)) ;
        else {
            break;
        }
        currPos.forward();
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {Object<string,any>} attributes
 * @return {Map<string,any>}
 *
 * @private
 * @function
 **/ const insertAttributes = (transaction, parent, currPos, attributes)=>{
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const negatedAttributes = new Map();
    // insert format-start items
    for(const key in attributes){
        const val = attributes[key];
        var _currPos_currentAttributes_get;
        const currentVal = (_currPos_currentAttributes_get = currPos.currentAttributes.get(key)) !== null && _currPos_currentAttributes_get !== void 0 ? _currPos_currentAttributes_get : null;
        if (!equalAttrs(currentVal, val)) {
            // save negated attribute (set null if currentVal undefined)
            negatedAttributes.set(key, currentVal);
            const { left, right } = currPos;
            currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
            currPos.right.integrate(transaction, 0);
            currPos.forward();
        }
    }
    return negatedAttributes;
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {string|object|AbstractType<any>} text
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 **/ const insertText = (transaction, parent, currPos, text, attributes)=>{
    currPos.currentAttributes.forEach((_val, key)=>{
        if (attributes[key] === undefined) {
            attributes[key] = null;
        }
    });
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    // insert content
    const content = text.constructor === String ? new ContentString(text) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
    let { left, right, index } = currPos;
    if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
    }
    right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
    right.integrate(transaction, 0);
    currPos.right = right;
    currPos.index = index;
    currPos.forward();
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {number} length
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 */ const formatText = (transaction, parent, currPos, length, attributes)=>{
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    // iterate until first non-format or null is found
    // delete all formats with attributes[format.key] != null
    // also check the attributes after the first non-format as we do not want to insert redundant negated attributes there
    // eslint-disable-next-line no-labels
    iterationLoop: while(currPos.right !== null && (length > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))){
        if (!currPos.right.deleted) {
            switch(currPos.right.content.constructor){
                case ContentFormat:
                    {
                        const { key, value } = currPos.right.content;
                        const attr = attributes[key];
                        if (attr !== undefined) {
                            if (equalAttrs(attr, value)) {
                                negatedAttributes.delete(key);
                            } else {
                                if (length === 0) {
                                    break iterationLoop;
                                }
                                negatedAttributes.set(key, value);
                            }
                            currPos.right.delete(transaction);
                        } else {
                            currPos.currentAttributes.set(key, value);
                        }
                        break;
                    }
                default:
                    if (length < currPos.right.length) {
                        getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
                    }
                    length -= currPos.right.length;
                    break;
            }
        }
        currPos.forward();
    }
    // Quill just assumes that the editor starts with a newline and that it always
    // ends with a newline. We only insert that newline when a new newline is
    // inserted - i.e when length is bigger than type.length
    if (length > 0) {
        let newlines = '';
        for(; length > 0; length--){
            newlines += '\n';
        }
        currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
        currPos.right.integrate(transaction, 0);
        currPos.forward();
    }
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
 * Call this function after string content has been deleted in order to
 * clean up formatting Items.
 *
 * @param {Transaction} transaction
 * @param {Item} start
 * @param {Item|null} curr exclusive end, automatically iterates to the next Content Item
 * @param {Map<string,any>} startAttributes
 * @param {Map<string,any>} currAttributes
 * @return {number} The amount of formatting Items deleted.
 *
 * @function
 */ const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes)=>{
    /**
   * @type {Item|null}
   */ let end = start;
    /**
   * @type {Map<string,ContentFormat>}
   */ const endFormats = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
    while(end && (!end.countable || end.deleted)){
        if (!end.deleted && end.content.constructor === ContentFormat) {
            const cf = end.content;
            endFormats.set(cf.key, cf);
        }
        end = end.right;
    }
    let cleanups = 0;
    let reachedCurr = false;
    while(start !== end){
        if (curr === start) {
            reachedCurr = true;
        }
        if (!start.deleted) {
            const content = start.content;
            switch(content.constructor){
                case ContentFormat:
                    {
                        const { key, value } = content;
                        var _startAttributes_get;
                        const startAttrValue = (_startAttributes_get = startAttributes.get(key)) !== null && _startAttributes_get !== void 0 ? _startAttributes_get : null;
                        if (endFormats.get(key) !== content || startAttrValue === value) {
                            // Either this format is overwritten or it is not necessary because the attribute already existed.
                            start.delete(transaction);
                            cleanups++;
                            var _currAttributes_get;
                            if (!reachedCurr && ((_currAttributes_get = currAttributes.get(key)) !== null && _currAttributes_get !== void 0 ? _currAttributes_get : null) === value && startAttrValue !== value) {
                                if (startAttrValue === null) {
                                    currAttributes.delete(key);
                                } else {
                                    currAttributes.set(key, startAttrValue);
                                }
                            }
                        }
                        if (!reachedCurr && !start.deleted) {
                            updateCurrentAttributes(currAttributes, content);
                        }
                        break;
                    }
            }
        }
        start = start.right;
    }
    return cleanups;
};
/**
 * @param {Transaction} transaction
 * @param {Item | null} item
 */ const cleanupContextlessFormattingGap = (transaction, item)=>{
    // iterate until item.right is null or content
    while(item && item.right && (item.right.deleted || !item.right.countable)){
        item = item.right;
    }
    const attrs = new Set();
    // iterate back until a content item is found
    while(item && (item.deleted || !item.countable)){
        if (!item.deleted && item.content.constructor === ContentFormat) {
            const key = /** @type {ContentFormat} */ item.content.key;
            if (attrs.has(key)) {
                item.delete(transaction);
            } else {
                attrs.add(key);
            }
        }
        item = item.left;
    }
};
/**
 * This function is experimental and subject to change / be removed.
 *
 * Ideally, we don't need this function at all. Formatting attributes should be cleaned up
 * automatically after each change. This function iterates twice over the complete YText type
 * and removes unnecessary formatting attributes. This is also helpful for testing.
 *
 * This function won't be exported anymore as soon as there is confidence that the YText type works as intended.
 *
 * @param {YText} type
 * @return {number} How many formatting attributes have been cleaned up.
 */ const cleanupYTextFormatting = (type)=>{
    let res = 0;
    transact(type.doc, (transaction)=>{
        let start = type._start;
        let end = type._start;
        let startAttributes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]();
        const currentAttributes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"](startAttributes);
        while(end){
            if (end.deleted === false) {
                switch(end.content.constructor){
                    case ContentFormat:
                        updateCurrentAttributes(currentAttributes, end.content);
                        break;
                    default:
                        res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
                        startAttributes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"](currentAttributes);
                        start = end;
                        break;
                }
            }
            end = end.right;
        }
    });
    return res;
};
/**
 * This will be called by the transaction once the event handlers are called to potentially cleanup
 * formatting attributes.
 *
 * @param {Transaction} transaction
 */ const cleanupYTextAfterTransaction = (transaction)=>{
    /**
   * @type {Set<YText>}
   */ const needFullCleanup = new Set();
    // check if another formatting item was inserted
    const doc = transaction.doc;
    for (const [client, afterClock] of transaction.afterState.entries()){
        const clock = transaction.beforeState.get(client) || 0;
        if (afterClock === clock) {
            continue;
        }
        iterateStructs(transaction, doc.store.clients.get(client), clock, afterClock, (item)=>{
            if (!item.deleted && /** @type {Item} */ item.content.constructor === ContentFormat && item.constructor !== GC) {
                needFullCleanup.add(/** @type {any} */ item.parent);
            }
        });
    }
    // cleanup in a new transaction
    transact(doc, (t)=>{
        iterateDeletedStructs(transaction, transaction.deleteSet, (item)=>{
            if (item instanceof GC || !/** @type {YText} */ item.parent._hasFormatting || needFullCleanup.has(item.parent)) {
                return;
            }
            const parent = item.parent;
            if (item.content.constructor === ContentFormat) {
                needFullCleanup.add(parent);
            } else {
                // If no formatting attribute was inserted or deleted, we can make due with contextless
                // formatting cleanups.
                // Contextless: it is not necessary to compute currentAttributes for the affected position.
                cleanupContextlessFormattingGap(t, item);
            }
        });
        // If a formatting item was inserted, we simply clean the whole type.
        // We need to compute currentAttributes for the current position anyway.
        for (const yText of needFullCleanup){
            cleanupYTextFormatting(yText);
        }
    });
};
/**
 * @param {Transaction} transaction
 * @param {ItemTextListPosition} currPos
 * @param {number} length
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const deleteText = (transaction, currPos, length)=>{
    const startLength = length;
    const startAttrs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"](currPos.currentAttributes);
    const start = currPos.right;
    while(length > 0 && currPos.right !== null){
        if (currPos.right.deleted === false) {
            switch(currPos.right.content.constructor){
                case ContentType:
                case ContentEmbed:
                case ContentString:
                    if (length < currPos.right.length) {
                        getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
                    }
                    length -= currPos.right.length;
                    currPos.right.delete(transaction);
                    break;
            }
        }
        currPos.forward();
    }
    if (start) {
        cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
    }
    const parent = /** @type {Item} */ (currPos.left || currPos.right).parent;
    if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length);
    }
    return currPos;
};
/**
 * The Quill Delta format represents changes on a text document with
 * formatting information. For more information visit {@link https://quilljs.com/docs/delta/|Quill Delta}
 *
 * @example
 *   {
 *     ops: [
 *       { insert: 'Gandalf', attributes: { bold: true } },
 *       { insert: ' the ' },
 *       { insert: 'Grey', attributes: { color: '#cccccc' } }
 *     ]
 *   }
 *
 */ /**
  * Attributes that can be assigned to a selection of text.
  *
  * @example
  *   {
  *     bold: true,
  *     font-size: '40px'
  *   }
  *
  * @typedef {Object} TextAttributes
  */ /**
 * @extends YEvent<YText>
 * Event that describes the changes on a YText type.
 */ class YTextEvent extends YEvent {
    /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */ get changes() {
        if (this._changes === null) {
            /**
       * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string|AbstractType<any>|object, delete?:number, retain?:number}>}}
       */ const changes = {
                keys: this.keys,
                delta: this.delta,
                added: new Set(),
                deleted: new Set()
            };
            this._changes = changes;
        }
        return this._changes;
    }
    /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */ get delta() {
        if (this._delta === null) {
            const y = this.target.doc;
            /**
       * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
       */ const delta = [];
            transact(y, (transaction)=>{
                const currentAttributes = new Map(); // saves all current attributes for insert
                const oldAttributes = new Map();
                let item = this.target._start;
                /**
         * @type {string?}
         */ let action = null;
                /**
         * @type {Object<string,any>}
         */ const attributes = {}; // counts added or removed new attributes for retain
                /**
         * @type {string|object}
         */ let insert = '';
                let retain = 0;
                let deleteLen = 0;
                const addOp = ()=>{
                    if (action !== null) {
                        /**
             * @type {any}
             */ let op = null;
                        switch(action){
                            case 'delete':
                                if (deleteLen > 0) {
                                    op = {
                                        delete: deleteLen
                                    };
                                }
                                deleteLen = 0;
                                break;
                            case 'insert':
                                if (typeof insert === 'object' || insert.length > 0) {
                                    op = {
                                        insert
                                    };
                                    if (currentAttributes.size > 0) {
                                        op.attributes = {};
                                        currentAttributes.forEach((value, key)=>{
                                            if (value !== null) {
                                                op.attributes[key] = value;
                                            }
                                        });
                                    }
                                }
                                insert = '';
                                break;
                            case 'retain':
                                if (retain > 0) {
                                    op = {
                                        retain
                                    };
                                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"](attributes)) {
                                        op.attributes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"]({}, attributes);
                                    }
                                }
                                retain = 0;
                                break;
                        }
                        if (op) delta.push(op);
                        action = null;
                    }
                };
                while(item !== null){
                    switch(item.content.constructor){
                        case ContentType:
                        case ContentEmbed:
                            if (this.adds(item)) {
                                if (!this.deletes(item)) {
                                    addOp();
                                    action = 'insert';
                                    insert = item.content.getContent()[0];
                                    addOp();
                                }
                            } else if (this.deletes(item)) {
                                if (action !== 'delete') {
                                    addOp();
                                    action = 'delete';
                                }
                                deleteLen += 1;
                            } else if (!item.deleted) {
                                if (action !== 'retain') {
                                    addOp();
                                    action = 'retain';
                                }
                                retain += 1;
                            }
                            break;
                        case ContentString:
                            if (this.adds(item)) {
                                if (!this.deletes(item)) {
                                    if (action !== 'insert') {
                                        addOp();
                                        action = 'insert';
                                    }
                                    insert += /** @type {ContentString} */ item.content.str;
                                }
                            } else if (this.deletes(item)) {
                                if (action !== 'delete') {
                                    addOp();
                                    action = 'delete';
                                }
                                deleteLen += item.length;
                            } else if (!item.deleted) {
                                if (action !== 'retain') {
                                    addOp();
                                    action = 'retain';
                                }
                                retain += item.length;
                            }
                            break;
                        case ContentFormat:
                            {
                                const { key, value } = item.content;
                                if (this.adds(item)) {
                                    if (!this.deletes(item)) {
                                        var _currentAttributes_get;
                                        const curVal = (_currentAttributes_get = currentAttributes.get(key)) !== null && _currentAttributes_get !== void 0 ? _currentAttributes_get : null;
                                        if (!equalAttrs(curVal, value)) {
                                            if (action === 'retain') {
                                                addOp();
                                            }
                                            var _oldAttributes_get;
                                            if (equalAttrs(value, (_oldAttributes_get = oldAttributes.get(key)) !== null && _oldAttributes_get !== void 0 ? _oldAttributes_get : null)) {
                                                delete attributes[key];
                                            } else {
                                                attributes[key] = value;
                                            }
                                        } else if (value !== null) {
                                            item.delete(transaction);
                                        }
                                    }
                                } else if (this.deletes(item)) {
                                    oldAttributes.set(key, value);
                                    var _currentAttributes_get1;
                                    const curVal = (_currentAttributes_get1 = currentAttributes.get(key)) !== null && _currentAttributes_get1 !== void 0 ? _currentAttributes_get1 : null;
                                    if (!equalAttrs(curVal, value)) {
                                        if (action === 'retain') {
                                            addOp();
                                        }
                                        attributes[key] = curVal;
                                    }
                                } else if (!item.deleted) {
                                    oldAttributes.set(key, value);
                                    const attr = attributes[key];
                                    if (attr !== undefined) {
                                        if (!equalAttrs(attr, value)) {
                                            if (action === 'retain') {
                                                addOp();
                                            }
                                            if (value === null) {
                                                delete attributes[key];
                                            } else {
                                                attributes[key] = value;
                                            }
                                        } else if (attr !== null) {
                                            item.delete(transaction);
                                        }
                                    }
                                }
                                if (!item.deleted) {
                                    if (action === 'insert') {
                                        addOp();
                                    }
                                    updateCurrentAttributes(currentAttributes, item.content);
                                }
                                break;
                            }
                    }
                    item = item.right;
                }
                addOp();
                while(delta.length > 0){
                    const lastOp = delta[delta.length - 1];
                    if (lastOp.retain !== undefined && lastOp.attributes === undefined) {
                        // retain delta's if they don't assign attributes
                        delta.pop();
                    } else {
                        break;
                    }
                }
            });
            this._delta = delta;
        }
        return this._delta;
    }
    /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */ constructor(ytext, transaction, subs){
        super(ytext, transaction);
        /**
     * Whether the children changed.
     * @type {Boolean}
     * @private
     */ this.childListChanged = false;
        /**
     * Set of all changed attributes.
     * @type {Set<string>}
     */ this.keysChanged = new Set();
        subs.forEach((sub)=>{
            if (sub === null) {
                this.childListChanged = true;
            } else {
                this.keysChanged.add(sub);
            }
        });
    }
}
/**
 * Type that represents text with formatting information.
 *
 * This type replaces y-richtext as this implementation is able to handle
 * block formats (format information on a paragraph), embeds (complex elements
 * like pictures and videos), and text formats (**bold**, *italic*).
 *
 * @extends AbstractType<YTextEvent>
 */ class YText extends AbstractType {
    /**
   * Number of characters of this text type.
   *
   * @type {number}
   */ get length() {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        return this._length;
    }
    /**
   * @param {Doc} y
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        try {
            /** @type {Array<function>} */ this._pending.forEach((f)=>f());
        } catch (e) {
            console.error(e);
        }
        this._pending = null;
    }
    _copy() {
        return new YText();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */ clone() {
        const text = new YText();
        text.applyDelta(this.toDelta());
        return text;
    }
    /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        const event = new YTextEvent(this, transaction, parentSubs);
        callTypeObservers(this, transaction, event);
        // If a remote change happened, we try to cleanup potential formatting duplicates.
        if (!transaction.local && this._hasFormatting) {
            transaction._needFormattingCleanup = true;
        }
    }
    /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */ toString() {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        let str = '';
        /**
     * @type {Item|null}
     */ let n = this._start;
        while(n !== null){
            if (!n.deleted && n.countable && n.content.constructor === ContentString) {
                str += /** @type {ContentString} */ n.content.str;
            }
            n = n.right;
        }
        return str;
    }
    /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */ toJSON() {
        return this.toString();
    }
    /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */ applyDelta(delta) {
        let { sanitize = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                const currPos = new ItemTextListPosition(null, this._start, 0, new Map());
                for(let i = 0; i < delta.length; i++){
                    const op = delta[i];
                    if (op.insert !== undefined) {
                        // Quill assumes that the content starts with an empty paragraph.
                        // Yjs/Y.Text assumes that it starts empty. We always hide that
                        // there is a newline at the end of the content.
                        // If we omit this step, clients will see a different number of
                        // paragraphs, but nothing bad will happen.
                        const ins = !sanitize && typeof op.insert === 'string' && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === '\n' ? op.insert.slice(0, -1) : op.insert;
                        if (typeof ins !== 'string' || ins.length > 0) {
                            insertText(transaction, this, currPos, ins, op.attributes || {});
                        }
                    } else if (op.retain !== undefined) {
                        formatText(transaction, this, currPos, op.retain, op.attributes || {});
                    } else if (op.delete !== undefined) {
                        deleteText(transaction, currPos, op.delete);
                    }
                }
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.applyDelta(delta));
        }
    }
    /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */ toDelta(snapshot, prevSnapshot, computeYChange) {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        /**
     * @type{Array<any>}
     */ const ops = [];
        const currentAttributes = new Map();
        const doc = this.doc;
        let str = '';
        let n = this._start;
        function packStr() {
            if (str.length > 0) {
                // pack str with attributes to ops
                /**
         * @type {Object<string,any>}
         */ const attributes = {};
                let addAttributes = false;
                currentAttributes.forEach((value, key)=>{
                    addAttributes = true;
                    attributes[key] = value;
                });
                /**
         * @type {Object<string,any>}
         */ const op = {
                    insert: str
                };
                if (addAttributes) {
                    op.attributes = attributes;
                }
                ops.push(op);
                str = '';
            }
        }
        const computeDelta = ()=>{
            while(n !== null){
                if (isVisible(n, snapshot) || prevSnapshot !== undefined && isVisible(n, prevSnapshot)) {
                    switch(n.content.constructor){
                        case ContentString:
                            {
                                const cur = currentAttributes.get('ychange');
                                if (snapshot !== undefined && !isVisible(n, snapshot)) {
                                    if (cur === undefined || cur.user !== n.id.client || cur.type !== 'removed') {
                                        packStr();
                                        currentAttributes.set('ychange', computeYChange ? computeYChange('removed', n.id) : {
                                            type: 'removed'
                                        });
                                    }
                                } else if (prevSnapshot !== undefined && !isVisible(n, prevSnapshot)) {
                                    if (cur === undefined || cur.user !== n.id.client || cur.type !== 'added') {
                                        packStr();
                                        currentAttributes.set('ychange', computeYChange ? computeYChange('added', n.id) : {
                                            type: 'added'
                                        });
                                    }
                                } else if (cur !== undefined) {
                                    packStr();
                                    currentAttributes.delete('ychange');
                                }
                                str += /** @type {ContentString} */ n.content.str;
                                break;
                            }
                        case ContentType:
                        case ContentEmbed:
                            {
                                packStr();
                                /**
               * @type {Object<string,any>}
               */ const op = {
                                    insert: n.content.getContent()[0]
                                };
                                if (currentAttributes.size > 0) {
                                    const attrs = {};
                                    op.attributes = attrs;
                                    currentAttributes.forEach((value, key)=>{
                                        attrs[key] = value;
                                    });
                                }
                                ops.push(op);
                                break;
                            }
                        case ContentFormat:
                            if (isVisible(n, snapshot)) {
                                packStr();
                                updateCurrentAttributes(currentAttributes, n.content);
                            }
                            break;
                    }
                }
                n = n.right;
            }
            packStr();
        };
        if (snapshot || prevSnapshot) {
            // snapshots are merged again after the transaction, so we need to keep the
            // transaction alive until we are done
            transact(doc, (transaction)=>{
                if (snapshot) {
                    splitSnapshotAffectedStructs(transaction, snapshot);
                }
                if (prevSnapshot) {
                    splitSnapshotAffectedStructs(transaction, prevSnapshot);
                }
                computeDelta();
            }, 'cleanup');
        } else {
            computeDelta();
        }
        return ops;
    }
    /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */ insert(index, text, attributes) {
        if (text.length <= 0) {
            return;
        }
        const y = this.doc;
        if (y !== null) {
            transact(y, (transaction)=>{
                const pos = findPosition(transaction, this, index, !attributes);
                if (!attributes) {
                    attributes = {};
                    // @ts-ignore
                    pos.currentAttributes.forEach((v, k)=>{
                        attributes[k] = v;
                    });
                }
                insertText(transaction, this, pos, text, attributes);
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.insert(index, text, attributes));
        }
    }
    /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */ insertEmbed(index, embed, attributes) {
        const y = this.doc;
        if (y !== null) {
            transact(y, (transaction)=>{
                const pos = findPosition(transaction, this, index, !attributes);
                insertText(transaction, this, pos, embed, attributes || {});
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.insertEmbed(index, embed, attributes || {}));
        }
    }
    /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */ delete(index, length) {
        if (length === 0) {
            return;
        }
        const y = this.doc;
        if (y !== null) {
            transact(y, (transaction)=>{
                deleteText(transaction, findPosition(transaction, this, index, true), length);
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.delete(index, length));
        }
    }
    /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */ format(index, length, attributes) {
        if (length === 0) {
            return;
        }
        const y = this.doc;
        if (y !== null) {
            transact(y, (transaction)=>{
                const pos = findPosition(transaction, this, index, false);
                if (pos.right === null) {
                    return;
                }
                formatText(transaction, this, pos, length, attributes);
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.format(index, length, attributes));
        }
    }
    /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */ removeAttribute(attributeName) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapDelete(transaction, this, attributeName);
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.removeAttribute(attributeName));
        }
    }
    /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */ setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapSet(transaction, this, attributeName, attributeValue);
            });
        } else {
            /** @type {Array<function>} */ this._pending.push(()=>this.setAttribute(attributeName, attributeValue));
        }
    }
    /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */ getAttribute(attributeName) {
        return typeMapGet(this, attributeName);
    }
    /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */ getAttributes() {
        return typeMapGetAll(this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YTextRefID);
    }
    /**
   * @param {String} [string] The initial value of the YText.
   */ constructor(string){
        super();
        /**
     * Array of pending operations on this type
     * @type {Array<function():void>?}
     */ this._pending = string !== undefined ? [
            ()=>this.insert(0, string)
        ] : [];
        /**
     * @type {Array<ArraySearchMarker>|null}
     */ this._searchMarker = [];
        /**
     * Whether this YText contains formatting attributes.
     * This flag is updated when a formatting item is integrated (see ContentFormat.integrate)
     */ this._hasFormatting = false;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 * @return {YText}
 *
 * @private
 * @function
 */ const readYText = (_decoder)=>new YText();
/**
 * @module YXml
 */ /**
 * Define the elements to which a set of CSS queries apply.
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors|CSS_Selectors}
 *
 * @example
 *   query = '.classSelector'
 *   query = 'nodeSelector'
 *   query = '#idSelector'
 *
 * @typedef {string} CSS_Selector
 */ /**
 * Dom filter function.
 *
 * @callback domFilter
 * @param {string} nodeName The nodeName of the element
 * @param {Map} attributes The map of attributes.
 * @return {boolean} Whether to include the Dom node in the YXmlElement.
 */ /**
 * Represents a subset of the nodes of a YXmlElement / YXmlFragment and a
 * position within them.
 *
 * Can be created with {@link YXmlFragment#createTreeWalker}
 *
 * @public
 * @implements {Iterable<YXmlElement|YXmlText|YXmlElement|YXmlHook>}
 */ class YXmlTreeWalker {
    [Symbol.iterator]() {
        return this;
    }
    /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */ next() {
        /**
     * @type {Item|null}
     */ let n = this._currentNode;
        let type = n && n.content && /** @type {any} */ n.content.type;
        if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
            do {
                type = /** @type {any} */ n.content.type;
                if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
                    // walk down in the tree
                    n = type._start;
                } else {
                    // walk right or up in the tree
                    while(n !== null){
                        /**
             * @type {Item | null}
             */ const nxt = n.next;
                        if (nxt !== null) {
                            n = nxt;
                            break;
                        } else if (n.parent === this._root) {
                            n = null;
                        } else {
                            n = /** @type {AbstractType<any>} */ n.parent._item;
                        }
                    }
                }
            }while (n !== null && (n.deleted || !this._filter(/** @type {ContentType} */ n.content.type)))
        }
        this._firstCall = false;
        if (n === null) {
            // @ts-ignore
            return {
                value: undefined,
                done: true
            };
        }
        this._currentNode = n;
        return {
            value: /** @type {any} */ n.content.type,
            done: false
        };
    }
    /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */ constructor(root, f = ()=>true){
        this._filter = f;
        this._root = root;
        /**
     * @type {Item}
     */ this._currentNode = root._start;
        this._firstCall = true;
        var _root_doc;
        (_root_doc = root.doc) !== null && _root_doc !== void 0 ? _root_doc : warnPrematureAccess();
    }
}
/**
 * Represents a list of {@link YXmlElement}.and {@link YXmlText} types.
 * A YxmlFragment is similar to a {@link YXmlElement}, but it does not have a
 * nodeName and it does not have attributes. Though it can be bound to a DOM
 * element - in this case the attributes and the nodeName are not shared.
 *
 * @public
 * @extends AbstractType<YXmlEvent>
 */ class YXmlFragment extends AbstractType {
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get firstChild() {
        const first = this._first;
        return first ? first.content.getContent()[0] : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        this.insert(0, this._prelimContent);
        this._prelimContent = null;
    }
    _copy() {
        return new YXmlFragment();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */ clone() {
        const el = new YXmlFragment();
        // @ts-ignore
        el.insert(0, this.toArray().map((item)=>item instanceof AbstractType ? item.clone() : item));
        return el;
    }
    get length() {
        var _this_doc;
        (_this_doc = this.doc) !== null && _this_doc !== void 0 ? _this_doc : warnPrematureAccess();
        return this._prelimContent === null ? this._length : this._prelimContent.length;
    }
    /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */ createTreeWalker(filter) {
        return new YXmlTreeWalker(this, filter);
    }
    /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */ querySelector(query) {
        query = query.toUpperCase();
        // @ts-ignore
        const iterator = new YXmlTreeWalker(this, (element)=>element.nodeName && element.nodeName.toUpperCase() === query);
        const next = iterator.next();
        if (next.done) {
            return null;
        } else {
            return next.value;
        }
    }
    /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */ querySelectorAll(query) {
        query = query.toUpperCase();
        // @ts-ignore
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"](new YXmlTreeWalker(this, (element)=>element.nodeName && element.nodeName.toUpperCase() === query));
    }
    /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
    }
    /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */ toString() {
        return typeListMap(this, (xml)=>xml.toString()).join('');
    }
    /**
   * @return {string}
   */ toJSON() {
        return this.toString();
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM() {
        let _document = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, hooks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, binding = arguments.length > 2 ? arguments[2] : void 0;
        const fragment = _document.createDocumentFragment();
        if (binding !== undefined) {
            binding._createAssociation(fragment, this);
        }
        typeListForEach(this, (xmlType)=>{
            fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
        });
        return fragment;
    }
    /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */ insert(index, content) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeListInsertGenerics(transaction, this, index, content);
            });
        } else {
            // @ts-ignore _prelimContent is defined because this is not yet integrated
            this._prelimContent.splice(index, 0, ...content);
        }
    }
    /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */ insertAfter(ref, content) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
                typeListInsertGenericsAfter(transaction, this, refItem, content);
            });
        } else {
            const pc = this._prelimContent;
            const index = ref === null ? 0 : pc.findIndex((el)=>el === ref) + 1;
            if (index === 0 && ref !== null) {
                throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"]('Reference item not found');
            }
            pc.splice(index, 0, ...content);
        }
    }
    /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */ delete(index) {
        let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeListDelete(transaction, this, index, length);
            });
        } else {
            // @ts-ignore _prelimContent is defined because this is not yet integrated
            this._prelimContent.splice(index, length);
        }
    }
    /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */ toArray() {
        return typeListToArray(this);
    }
    /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */ push(content) {
        this.insert(this.length, content);
    }
    /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */ unshift(content) {
        this.insert(0, content);
    }
    /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */ get(index) {
        return typeListGet(this, index);
    }
    /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */ slice() {
        let start = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.length;
        return typeListSlice(this, start, end);
    }
    /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        typeListForEach(this, f);
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlFragmentRefID);
    }
    constructor(){
        super();
        /**
     * @type {Array<any>|null}
     */ this._prelimContent = [];
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 * @return {YXmlFragment}
 *
 * @private
 * @function
 */ const readYXmlFragment = (_decoder)=>new YXmlFragment();
/**
 * @typedef {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} ValueTypes
 */ /**
 * An YXmlElement imitates the behavior of a
 * https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element
 *
 * * An YXmlElement has attributes (key value pairs)
 * * An YXmlElement has childElements that must inherit from YXmlElement
 *
 * @template {{ [key: string]: ValueTypes }} [KV={ [key: string]: string }]
 */ class YXmlElement extends YXmlFragment {
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get nextSibling() {
        const n = this._item ? this._item.next : null;
        return n ? /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get prevSibling() {
        const n = this._item ? this._item.prev : null;
        return n ? /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        this._prelimAttrs.forEach((value, key)=>{
            this.setAttribute(key, value);
        });
        this._prelimAttrs = null;
    }
    /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */ _copy() {
        return new YXmlElement(this.nodeName);
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */ clone() {
        /**
     * @type {YXmlElement<KV>}
     */ const el = new YXmlElement(this.nodeName);
        const attrs = this.getAttributes();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"](attrs, (value, key)=>{
            if (typeof value === 'string') {
                el.setAttribute(key, value);
            }
        });
        // @ts-ignore
        el.insert(0, this.toArray().map((item)=>item instanceof AbstractType ? item.clone() : item));
        return el;
    }
    /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */ toString() {
        const attrs = this.getAttributes();
        const stringBuilder = [];
        const keys = [];
        for(const key in attrs){
            keys.push(key);
        }
        keys.sort();
        const keysLen = keys.length;
        for(let i = 0; i < keysLen; i++){
            const key = keys[i];
            stringBuilder.push(key + '="' + attrs[key] + '"');
        }
        const nodeName = this.nodeName.toLocaleLowerCase();
        const attrsString = stringBuilder.length > 0 ? ' ' + stringBuilder.join(' ') : '';
        return "<".concat(nodeName).concat(attrsString, ">").concat(super.toString(), "</").concat(nodeName, ">");
    }
    /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */ removeAttribute(attributeName) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapDelete(transaction, this, attributeName);
            });
        } else {
            /** @type {Map<string,any>} */ this._prelimAttrs.delete(attributeName);
        }
    }
    /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */ setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) {
            transact(this.doc, (transaction)=>{
                typeMapSet(transaction, this, attributeName, attributeValue);
            });
        } else {
            /** @type {Map<string, any>} */ this._prelimAttrs.set(attributeName, attributeValue);
        }
    }
    /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */ getAttribute(attributeName) {
        return typeMapGet(this, attributeName);
    }
    /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */ hasAttribute(attributeName) {
        return typeMapHas(this, attributeName);
    }
    /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */ getAttributes(snapshot) {
        return snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this);
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM() {
        let _document = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, hooks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, binding = arguments.length > 2 ? arguments[2] : void 0;
        const dom = _document.createElement(this.nodeName);
        const attrs = this.getAttributes();
        for(const key in attrs){
            const value = attrs[key];
            if (typeof value === 'string') {
                dom.setAttribute(key, value);
            }
        }
        typeListForEach(this, (yxml)=>{
            dom.appendChild(yxml.toDOM(_document, hooks, binding));
        });
        if (binding !== undefined) {
            binding._createAssociation(dom, this);
        }
        return dom;
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlElementRefID);
        encoder.writeKey(this.nodeName);
    }
    constructor(nodeName = 'UNDEFINED'){
        super();
        this.nodeName = nodeName;
        /**
     * @type {Map<string, any>|null}
     */ this._prelimAttrs = new Map();
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlElement}
 *
 * @function
 */ const readYXmlElement = (decoder)=>new YXmlElement(decoder.readKey());
/**
 * @extends YEvent<YXmlElement|YXmlText|YXmlFragment>
 * An Event that describes changes on a YXml Element or Yxml Fragment
 */ class YXmlEvent extends YEvent {
    /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */ constructor(target, subs, transaction){
        super(target, transaction);
        /**
     * Whether the children changed.
     * @type {Boolean}
     * @private
     */ this.childListChanged = false;
        /**
     * Set of all changed attributes.
     * @type {Set<string>}
     */ this.attributesChanged = new Set();
        subs.forEach((sub)=>{
            if (sub === null) {
                this.childListChanged = true;
            } else {
                this.attributesChanged.add(sub);
            }
        });
    }
}
/**
 * You can manage binding to a custom type with YXmlHook.
 *
 * @extends {YMap<any>}
 */ class YXmlHook extends YMap {
    /**
   * Creates an Item with the same effect as this Item (without position effect)
   */ _copy() {
        return new YXmlHook(this.hookName);
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */ clone() {
        const el = new YXmlHook(this.hookName);
        this.forEach((value, key)=>{
            el.set(key, value);
        });
        return el;
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM() {
        let _document = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, hooks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, binding = arguments.length > 2 ? arguments[2] : void 0;
        const hook = hooks[this.hookName];
        let dom;
        if (hook !== undefined) {
            dom = hook.createDom(this);
        } else {
            dom = document.createElement(this.hookName);
        }
        dom.setAttribute('data-yjs-hook', this.hookName);
        if (binding !== undefined) {
            binding._createAssociation(dom, this);
        }
        return dom;
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlHookRefID);
        encoder.writeKey(this.hookName);
    }
    /**
   * @param {string} hookName nodeName of the Dom Node.
   */ constructor(hookName){
        super();
        /**
     * @type {string}
     */ this.hookName = hookName;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlHook}
 *
 * @private
 * @function
 */ const readYXmlHook = (decoder)=>new YXmlHook(decoder.readKey());
/**
 * Represents text in a Dom Element. In the future this type will also handle
 * simple formatting information like bold and italic.
 */ class YXmlText extends YText {
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get nextSibling() {
        const n = this._item ? this._item.next : null;
        return n ? /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get prevSibling() {
        const n = this._item ? this._item.prev : null;
        return n ? /** @type {ContentType} */ n.content.type : null;
    }
    _copy() {
        return new YXmlText();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */ clone() {
        const text = new YXmlText();
        text.applyDelta(this.toDelta());
        return text;
    }
    /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM() {
        let _document = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, hooks = arguments.length > 1 ? arguments[1] : void 0, binding = arguments.length > 2 ? arguments[2] : void 0;
        const dom = _document.createTextNode(this.toString());
        if (binding !== undefined) {
            binding._createAssociation(dom, this);
        }
        return dom;
    }
    toString() {
        // @ts-ignore
        return this.toDelta().map((delta)=>{
            const nestedNodes = [];
            for(const nodeName in delta.attributes){
                const attrs = [];
                for(const key in delta.attributes[nodeName]){
                    attrs.push({
                        key,
                        value: delta.attributes[nodeName][key]
                    });
                }
                // sort attributes to get a unique order
                attrs.sort((a, b)=>a.key < b.key ? -1 : 1);
                nestedNodes.push({
                    nodeName,
                    attrs
                });
            }
            // sort node order to get a unique order
            nestedNodes.sort((a, b)=>a.nodeName < b.nodeName ? -1 : 1);
            // now convert to dom string
            let str = '';
            for(let i = 0; i < nestedNodes.length; i++){
                const node = nestedNodes[i];
                str += "<".concat(node.nodeName);
                for(let j = 0; j < node.attrs.length; j++){
                    const attr = node.attrs[j];
                    str += " ".concat(attr.key, '="').concat(attr.value, '"');
                }
                str += '>';
            }
            str += delta.insert;
            for(let i = nestedNodes.length - 1; i >= 0; i--){
                str += "</".concat(nestedNodes[i].nodeName, ">");
            }
            return str;
        }).join('');
    }
    /**
   * @return {string}
   */ toJSON() {
        return this.toString();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlTextRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlText}
 *
 * @private
 * @function
 */ const readYXmlText = (decoder)=>new YXmlText();
class AbstractStruct {
    /**
   * @type {boolean}
   */ get deleted() {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */ write(encoder, offset, encodingRef) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ID} id
   * @param {number} length
   */ constructor(id, length){
        this.id = id;
        this.length = length;
    }
}
const structGCRefNumber = 0;
/**
 * @private
 */ class GC extends AbstractStruct {
    get deleted() {
        return true;
    }
    delete() {}
    /**
   * @param {GC} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor !== right.constructor) {
            return false;
        }
        this.length += right.length;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        if (offset > 0) {
            this.id.clock += offset;
            this.length -= offset;
        }
        addStruct(transaction.doc.store, this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeInfo(structGCRefNumber);
        encoder.writeLen(this.length - offset);
    }
    /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        return null;
    }
}
class ContentBinary {
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.content
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentBinary}
   */ copy() {
        return new ContentBinary(this.content);
    }
    /**
   * @param {number} offset
   * @return {ContentBinary}
   */ splice(offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ContentBinary} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeBuf(this.content);
    }
    /**
   * @return {number}
   */ getRef() {
        return 3;
    }
    /**
   * @param {Uint8Array} content
   */ constructor(content){
        this.content = content;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
 * @return {ContentBinary}
 */ const readContentBinary = (decoder)=>new ContentBinary(decoder.readBuf());
class ContentDeleted {
    /**
   * @return {number}
   */ getLength() {
        return this.len;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return false;
    }
    /**
   * @return {ContentDeleted}
   */ copy() {
        return new ContentDeleted(this.len);
    }
    /**
   * @param {number} offset
   * @return {ContentDeleted}
   */ splice(offset) {
        const right = new ContentDeleted(this.len - offset);
        this.len = offset;
        return right;
    }
    /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */ mergeWith(right) {
        this.len += right.len;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
        item.markDeleted();
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeLen(this.len - offset);
    }
    /**
   * @return {number}
   */ getRef() {
        return 1;
    }
    /**
   * @param {number} len
   */ constructor(len){
        this.len = len;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
 * @return {ContentDeleted}
 */ const readContentDeleted = (decoder)=>new ContentDeleted(decoder.readLen());
/**
 * @param {string} guid
 * @param {Object<string, any>} opts
 */ const createDocFromOpts = (guid, opts)=>new Doc({
        guid,
        ...opts,
        shouldLoad: opts.shouldLoad || opts.autoLoad || false
    });
/**
 * @private
 */ class ContentDoc {
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.doc
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentDoc}
   */ copy() {
        return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
    }
    /**
   * @param {number} offset
   * @return {ContentDoc}
   */ splice(offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ContentDoc} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        // this needs to be reflected in doc.destroy as well
        this.doc._item = item;
        transaction.subdocsAdded.add(this.doc);
        if (this.doc.shouldLoad) {
            transaction.subdocsLoaded.add(this.doc);
        }
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {
        if (transaction.subdocsAdded.has(this.doc)) {
            transaction.subdocsAdded.delete(this.doc);
        } else {
            transaction.subdocsRemoved.add(this.doc);
        }
    }
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeString(this.doc.guid);
        encoder.writeAny(this.opts);
    }
    /**
   * @return {number}
   */ getRef() {
        return 9;
    }
    /**
   * @param {Doc} doc
   */ constructor(doc){
        if (doc._item) {
            console.error('This document was already integrated as a sub-document. You should create a second instance instead with the same guid.');
        }
        /**
     * @type {Doc}
     */ this.doc = doc;
        /**
     * @type {any}
     */ const opts = {};
        this.opts = opts;
        if (!doc.gc) {
            opts.gc = false;
        }
        if (doc.autoLoad) {
            opts.autoLoad = true;
        }
        if (doc.meta !== null) {
            opts.meta = doc.meta;
        }
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentDoc}
 */ const readContentDoc = (decoder)=>new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
/**
 * @private
 */ class ContentEmbed {
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.embed
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentEmbed}
   */ copy() {
        return new ContentEmbed(this.embed);
    }
    /**
   * @param {number} offset
   * @return {ContentEmbed}
   */ splice(offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeJSON(this.embed);
    }
    /**
   * @return {number}
   */ getRef() {
        return 5;
    }
    /**
   * @param {Object} embed
   */ constructor(embed){
        this.embed = embed;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentEmbed}
 */ const readContentEmbed = (decoder)=>new ContentEmbed(decoder.readJSON());
/**
 * @private
 */ class ContentFormat {
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return false;
    }
    /**
   * @return {ContentFormat}
   */ copy() {
        return new ContentFormat(this.key, this.value);
    }
    /**
   * @param {number} _offset
   * @return {ContentFormat}
   */ splice(_offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */ mergeWith(_right) {
        return false;
    }
    /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */ integrate(_transaction, item) {
        // @todo searchmarker are currently unsupported for rich text documents
        const p = item.parent;
        p._searchMarker = null;
        p._hasFormatting = true;
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeKey(this.key);
        encoder.writeJSON(this.value);
    }
    /**
   * @return {number}
   */ getRef() {
        return 6;
    }
    /**
   * @param {string} key
   * @param {Object} value
   */ constructor(key, value){
        this.key = key;
        this.value = value;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentFormat}
 */ const readContentFormat = (decoder)=>new ContentFormat(decoder.readKey(), decoder.readJSON());
/**
 * @private
 */ class ContentJSON {
    /**
   * @return {number}
   */ getLength() {
        return this.arr.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.arr;
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentJSON}
   */ copy() {
        return new ContentJSON(this.arr);
    }
    /**
   * @param {number} offset
   * @return {ContentJSON}
   */ splice(offset) {
        const right = new ContentJSON(this.arr.slice(offset));
        this.arr = this.arr.slice(0, offset);
        return right;
    }
    /**
   * @param {ContentJSON} right
   * @return {boolean}
   */ mergeWith(right) {
        this.arr = this.arr.concat(right.arr);
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        const len = this.arr.length;
        encoder.writeLen(len - offset);
        for(let i = offset; i < len; i++){
            const c = this.arr[i];
            encoder.writeString(c === undefined ? 'undefined' : JSON.stringify(c));
        }
    }
    /**
   * @return {number}
   */ getRef() {
        return 2;
    }
    /**
   * @param {Array<any>} arr
   */ constructor(arr){
        /**
     * @type {Array<any>}
     */ this.arr = arr;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentJSON}
 */ const readContentJSON = (decoder)=>{
    const len = decoder.readLen();
    const cs = [];
    for(let i = 0; i < len; i++){
        const c = decoder.readString();
        if (c === 'undefined') {
            cs.push(undefined);
        } else {
            cs.push(JSON.parse(c));
        }
    }
    return new ContentJSON(cs);
};
const isDevMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariable"]('node_env') === 'development';
class ContentAny {
    /**
   * @return {number}
   */ getLength() {
        return this.arr.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.arr;
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentAny}
   */ copy() {
        return new ContentAny(this.arr);
    }
    /**
   * @param {number} offset
   * @return {ContentAny}
   */ splice(offset) {
        const right = new ContentAny(this.arr.slice(offset));
        this.arr = this.arr.slice(0, offset);
        return right;
    }
    /**
   * @param {ContentAny} right
   * @return {boolean}
   */ mergeWith(right) {
        this.arr = this.arr.concat(right.arr);
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        const len = this.arr.length;
        encoder.writeLen(len - offset);
        for(let i = offset; i < len; i++){
            const c = this.arr[i];
            encoder.writeAny(c);
        }
    }
    /**
   * @return {number}
   */ getRef() {
        return 8;
    }
    /**
   * @param {Array<any>} arr
   */ constructor(arr){
        /**
     * @type {Array<any>}
     */ this.arr = arr;
        isDevMode && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"](arr);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentAny}
 */ const readContentAny = (decoder)=>{
    const len = decoder.readLen();
    const cs = [];
    for(let i = 0; i < len; i++){
        cs.push(decoder.readAny());
    }
    return new ContentAny(cs);
};
/**
 * @private
 */ class ContentString {
    /**
   * @return {number}
   */ getLength() {
        return this.str.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.str.split('');
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentString}
   */ copy() {
        return new ContentString(this.str);
    }
    /**
   * @param {number} offset
   * @return {ContentString}
   */ splice(offset) {
        const right = new ContentString(this.str.slice(offset));
        this.str = this.str.slice(0, offset);
        // Prevent encoding invalid documents because of splitting of surrogate pairs: https://github.com/yjs/yjs/issues/248
        const firstCharCode = this.str.charCodeAt(offset - 1);
        if (firstCharCode >= 0xD800 && firstCharCode <= 0xDBFF) {
            // Last character of the left split is the start of a surrogate utf16/ucs2 pair.
            // We don't support splitting of surrogate pairs because this may lead to invalid documents.
            // Replace the invalid character with a unicode replacement character (� / U+FFFD)
            this.str = this.str.slice(0, offset - 1) + '�';
            // replace right as well
            right.str = '�' + right.str.slice(1);
        }
        return right;
    }
    /**
   * @param {ContentString} right
   * @return {boolean}
   */ mergeWith(right) {
        this.str += right.str;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
    }
    /**
   * @return {number}
   */ getRef() {
        return 4;
    }
    /**
   * @param {string} str
   */ constructor(str){
        /**
     * @type {string}
     */ this.str = str;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentString}
 */ const readContentString = (decoder)=>new ContentString(decoder.readString());
/**
 * @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractType<any>>}
 * @private
 */ const typeRefs = [
    readYArray,
    readYMap,
    readYText,
    readYXmlElement,
    readYXmlFragment,
    readYXmlHook,
    readYXmlText
];
const YArrayRefID = 0;
const YMapRefID = 1;
const YTextRefID = 2;
const YXmlElementRefID = 3;
const YXmlFragmentRefID = 4;
const YXmlHookRefID = 5;
const YXmlTextRefID = 6;
/**
 * @private
 */ class ContentType {
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.type
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentType}
   */ copy() {
        return new ContentType(this.type._copy());
    }
    /**
   * @param {number} offset
   * @return {ContentType}
   */ splice(offset) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["methodUnimplemented"]();
    }
    /**
   * @param {ContentType} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        this.type._integrate(transaction.doc, item);
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {
        let item = this.type._start;
        while(item !== null){
            if (!item.deleted) {
                item.delete(transaction);
            } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
                // This will be gc'd later and we want to merge it if possible
                // We try to merge all deleted items after each transaction,
                // but we have no knowledge about that this needs to be merged
                // since it is not in transaction.ds. Hence we add it to transaction._mergeStructs
                transaction._mergeStructs.push(item);
            }
            item = item.right;
        }
        this.type._map.forEach((item)=>{
            if (!item.deleted) {
                item.delete(transaction);
            } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
                // same as above
                transaction._mergeStructs.push(item);
            }
        });
        transaction.changed.delete(this.type);
    }
    /**
   * @param {StructStore} store
   */ gc(store) {
        let item = this.type._start;
        while(item !== null){
            item.gc(store, true);
            item = item.right;
        }
        this.type._start = null;
        this.type._map.forEach(/** @param {Item | null} item */ (item)=>{
            while(item !== null){
                item.gc(store, true);
                item = item.left;
            }
        });
        this.type._map = new Map();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        this.type._write(encoder);
    }
    /**
   * @return {number}
   */ getRef() {
        return 7;
    }
    /**
   * @param {AbstractType<any>} type
   */ constructor(type){
        /**
     * @type {AbstractType<any>}
     */ this.type = type;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentType}
 */ const readContentType = (decoder)=>new ContentType(typeRefs[decoder.readTypeRef()](decoder));
/**
 * @todo This should return several items
 *
 * @param {StructStore} store
 * @param {ID} id
 * @return {{item:Item, diff:number}}
 */ const followRedone = (store, id)=>{
    /**
   * @type {ID|null}
   */ let nextID = id;
    let diff = 0;
    let item;
    do {
        if (diff > 0) {
            nextID = createID(nextID.client, nextID.clock + diff);
        }
        item = getItem(store, nextID);
        diff = nextID.clock - item.id.clock;
        nextID = item.redone;
    }while (nextID !== null && item instanceof Item)
    return {
        item,
        diff
    };
};
/**
 * Make sure that neither item nor any of its parents is ever deleted.
 *
 * This property does not persist when storing it into a database or when
 * sending it to other peers
 *
 * @param {Item|null} item
 * @param {boolean} keep
 */ const keepItem = (item, keep)=>{
    while(item !== null && item.keep !== keep){
        item.keep = keep;
        item = /** @type {AbstractType<any>} */ item.parent._item;
    }
};
/**
 * Split leftItem into two items
 * @param {Transaction} transaction
 * @param {Item} leftItem
 * @param {number} diff
 * @return {Item}
 *
 * @function
 * @private
 */ const splitItem = (transaction, leftItem, diff)=>{
    // create rightItem
    const { client, clock } = leftItem.id;
    const rightItem = new Item(createID(client, clock + diff), leftItem, createID(client, clock + diff - 1), leftItem.right, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
    if (leftItem.deleted) {
        rightItem.markDeleted();
    }
    if (leftItem.keep) {
        rightItem.keep = true;
    }
    if (leftItem.redone !== null) {
        rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
    }
    // update left (do not set leftItem.rightOrigin as it will lead to problems when syncing)
    leftItem.right = rightItem;
    // update right
    if (rightItem.right !== null) {
        rightItem.right.left = rightItem;
    }
    // right is more specific.
    transaction._mergeStructs.push(rightItem);
    // update parent._map
    if (rightItem.parentSub !== null && rightItem.right === null) {
        /** @type {AbstractType<any>} */ rightItem.parent._map.set(rightItem.parentSub, rightItem);
    }
    leftItem.length = diff;
    return rightItem;
};
/**
 * @param {Array<StackItem>} stack
 * @param {ID} id
 */ const isDeletedByUndoStack = (stack, id)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["some"](stack, /** @param {StackItem} s */ (s)=>isDeleted(s.deletions, id));
/**
 * Redoes the effect of this operation.
 *
 * @param {Transaction} transaction The Yjs instance.
 * @param {Item} item
 * @param {Set<Item>} redoitems
 * @param {DeleteSet} itemsToDelete
 * @param {boolean} ignoreRemoteMapChanges
 * @param {import('../utils/UndoManager.js').UndoManager} um
 *
 * @return {Item|null}
 *
 * @private
 */ const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um)=>{
    const doc = transaction.doc;
    const store = doc.store;
    const ownClientID = doc.clientID;
    const redone = item.redone;
    if (redone !== null) {
        return getItemCleanStart(transaction, redone);
    }
    let parentItem = /** @type {AbstractType<any>} */ item.parent._item;
    /**
   * @type {Item|null}
   */ let left = null;
    /**
   * @type {Item|null}
   */ let right;
    // make sure that parent is redone
    if (parentItem !== null && parentItem.deleted === true) {
        // try to undo parent if it will be undone anyway
        if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) {
            return null;
        }
        while(parentItem.redone !== null){
            parentItem = getItemCleanStart(transaction, parentItem.redone);
        }
    }
    const parentType = parentItem === null ? item.parent : /** @type {ContentType} */ parentItem.content.type;
    if (item.parentSub === null) {
        // Is an array item. Insert at the old position
        left = item.left;
        right = item;
        // find next cloned_redo items
        while(left !== null){
            /**
       * @type {Item|null}
       */ let leftTrace = left;
            // trace redone until parent matches
            while(leftTrace !== null && /** @type {AbstractType<any>} */ leftTrace.parent._item !== parentItem){
                leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
            }
            if (leftTrace !== null && /** @type {AbstractType<any>} */ leftTrace.parent._item === parentItem) {
                left = leftTrace;
                break;
            }
            left = left.left;
        }
        while(right !== null){
            /**
       * @type {Item|null}
       */ let rightTrace = right;
            // trace redone until parent matches
            while(rightTrace !== null && /** @type {AbstractType<any>} */ rightTrace.parent._item !== parentItem){
                rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
            }
            if (rightTrace !== null && /** @type {AbstractType<any>} */ rightTrace.parent._item === parentItem) {
                right = rightTrace;
                break;
            }
            right = right.right;
        }
    } else {
        right = null;
        if (item.right && !ignoreRemoteMapChanges) {
            left = item;
            // Iterate right while right is in itemsToDelete
            // If it is intended to delete right while item is redone, we can expect that item should replace right.
            while(left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))){
                left = left.right;
                // follow redone
                while(left.redone)left = getItemCleanStart(transaction, left.redone);
            }
            if (left && left.right !== null) {
                // It is not possible to redo this item because it conflicts with a
                // change from another client
                return null;
            }
        } else {
            left = parentType._map.get(item.parentSub) || null;
        }
    }
    const nextClock = getState(store, ownClientID);
    const nextId = createID(ownClientID, nextClock);
    const redoneItem = new Item(nextId, left, left && left.lastId, right, right && right.id, parentType, item.parentSub, item.content.copy());
    item.redone = nextId;
    keepItem(redoneItem, true);
    redoneItem.integrate(transaction, 0);
    return redoneItem;
};
/**
 * Abstract class that represents any content.
 */ class Item extends AbstractStruct {
    /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */ set marker(isMarked) {
        if ((this.info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT4"]) > 0 !== isMarked) {
            this.info ^= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT4"];
        }
    }
    get marker() {
        return (this.info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT4"]) > 0;
    }
    /**
   * If true, do not garbage collect this Item.
   */ get keep() {
        return (this.info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT1"]) > 0;
    }
    set keep(doKeep) {
        if (this.keep !== doKeep) {
            this.info ^= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT1"];
        }
    }
    get countable() {
        return (this.info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT2"]) > 0;
    }
    /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */ get deleted() {
        return (this.info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT3"]) > 0;
    }
    set deleted(doDelete) {
        if (this.deleted !== doDelete) {
            this.info ^= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT3"];
        }
    }
    markDeleted() {
        this.info |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT3"];
    }
    /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
            return this.origin.client;
        }
        if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
            return this.rightOrigin.client;
        }
        if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
            return this.parent.client;
        }
        // We have all missing ids, now find the items
        if (this.origin) {
            this.left = getItemCleanEnd(transaction, store, this.origin);
            this.origin = this.left.lastId;
        }
        if (this.rightOrigin) {
            this.right = getItemCleanStart(transaction, this.rightOrigin);
            this.rightOrigin = this.right.id;
        }
        if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
            this.parent = null;
        } else if (!this.parent) {
            // only set parent if this shouldn't be garbage collected
            if (this.left && this.left.constructor === Item) {
                this.parent = this.left.parent;
                this.parentSub = this.left.parentSub;
            } else if (this.right && this.right.constructor === Item) {
                this.parent = this.right.parent;
                this.parentSub = this.right.parentSub;
            }
        } else if (this.parent.constructor === ID) {
            const parentItem = getItem(store, this.parent);
            if (parentItem.constructor === GC) {
                this.parent = null;
            } else {
                this.parent = /** @type {ContentType} */ parentItem.content.type;
            }
        }
        return null;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        if (offset > 0) {
            this.id.clock += offset;
            this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
            this.origin = this.left.lastId;
            this.content = this.content.splice(offset);
            this.length -= offset;
        }
        if (this.parent) {
            if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
                /**
         * @type {Item|null}
         */ let left = this.left;
                /**
         * @type {Item|null}
         */ let o;
                // set o to the first conflicting item
                if (left !== null) {
                    o = left.right;
                } else if (this.parentSub !== null) {
                    o = /** @type {AbstractType<any>} */ this.parent._map.get(this.parentSub) || null;
                    while(o !== null && o.left !== null){
                        o = o.left;
                    }
                } else {
                    o = /** @type {AbstractType<any>} */ this.parent._start;
                }
                // TODO: use something like DeleteSet here (a tree implementation would be best)
                // @todo use global set definitions
                /**
         * @type {Set<Item>}
         */ const conflictingItems = new Set();
                /**
         * @type {Set<Item>}
         */ const itemsBeforeOrigin = new Set();
                // Let c in conflictingItems, b in itemsBeforeOrigin
                // ***{origin}bbbb{this}{c,b}{c,b}{o}***
                // Note that conflictingItems is a subset of itemsBeforeOrigin
                while(o !== null && o !== this.right){
                    itemsBeforeOrigin.add(o);
                    conflictingItems.add(o);
                    if (compareIDs(this.origin, o.origin)) {
                        // case 1
                        if (o.id.client < this.id.client) {
                            left = o;
                            conflictingItems.clear();
                        } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
                            break;
                        } // else, o might be integrated before an item that this conflicts with. If so, we will find it in the next iterations
                    } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
                        // case 2
                        if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
                            left = o;
                            conflictingItems.clear();
                        }
                    } else {
                        break;
                    }
                    o = o.right;
                }
                this.left = left;
            }
            // reconnect left/right + update parent map/start if necessary
            if (this.left !== null) {
                const right = this.left.right;
                this.right = right;
                this.left.right = this;
            } else {
                let r;
                if (this.parentSub !== null) {
                    r = /** @type {AbstractType<any>} */ this.parent._map.get(this.parentSub) || null;
                    while(r !== null && r.left !== null){
                        r = r.left;
                    }
                } else {
                    r = /** @type {AbstractType<any>} */ this.parent._start; /** @type {AbstractType<any>} */ 
                    this.parent._start = this;
                }
                this.right = r;
            }
            if (this.right !== null) {
                this.right.left = this;
            } else if (this.parentSub !== null) {
                // set as current parent value if right === null and this is parentSub
                /** @type {AbstractType<any>} */ this.parent._map.set(this.parentSub, this);
                if (this.left !== null) {
                    // this is the current attribute value of parent. delete right
                    this.left.delete(transaction);
                }
            }
            // adjust length of parent
            if (this.parentSub === null && this.countable && !this.deleted) {
                /** @type {AbstractType<any>} */ this.parent._length += this.length;
            }
            addStruct(transaction.doc.store, this);
            this.content.integrate(transaction, this);
            // add parent to transaction.changed
            addChangedTypeToTransaction(transaction, this.parent, this.parentSub);
            if (/** @type {AbstractType<any>} */ this.parent._item !== null && /** @type {AbstractType<any>} */ this.parent._item.deleted || this.parentSub !== null && this.right !== null) {
                // delete if parent is deleted or if this is not the current attribute value of parent
                this.delete(transaction);
            }
        } else {
            // parent is not defined. Integrate GC struct instead
            new GC(this.id, this.length).integrate(transaction, 0);
        }
    }
    /**
   * Returns the next non-deleted item
   */ get next() {
        let n = this.right;
        while(n !== null && n.deleted){
            n = n.right;
        }
        return n;
    }
    /**
   * Returns the previous non-deleted item
   */ get prev() {
        let n = this.left;
        while(n !== null && n.deleted){
            n = n.left;
        }
        return n;
    }
    /**
   * Computes the last content address of this Item.
   */ get lastId() {
        // allocating ids is pretty costly because of the amount of ids created, so we try to reuse whenever possible
        return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
    }
    /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
            const searchMarker = /** @type {AbstractType<any>} */ this.parent._searchMarker;
            if (searchMarker) {
                searchMarker.forEach((marker)=>{
                    if (marker.p === right) {
                        // right is going to be "forgotten" so we need to update the marker
                        marker.p = this;
                        // adjust marker index
                        if (!this.deleted && this.countable) {
                            marker.index -= this.length;
                        }
                    }
                });
            }
            if (right.keep) {
                this.keep = true;
            }
            this.right = right.right;
            if (this.right !== null) {
                this.right.left = this;
            }
            this.length += right.length;
            return true;
        }
        return false;
    }
    /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */ delete(transaction) {
        if (!this.deleted) {
            const parent = this.parent;
            // adjust the length of parent
            if (this.countable && this.parentSub === null) {
                parent._length -= this.length;
            }
            this.markDeleted();
            addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
            addChangedTypeToTransaction(transaction, parent, this.parentSub);
            this.content.delete(transaction);
        }
    }
    /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */ gc(store, parentGCd) {
        if (!this.deleted) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
        }
        this.content.gc(store);
        if (parentGCd) {
            replaceStruct(store, this, new GC(this.id, this.length));
        } else {
            this.content = new ContentDeleted(this.length);
        }
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */ write(encoder, offset) {
        const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
        const rightOrigin = this.rightOrigin;
        const parentSub = this.parentSub;
        const info = this.content.getRef() & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS5"] | (origin === null ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT8"]) | // origin is defined
        (rightOrigin === null ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT7"]) | // right origin is defined
        (parentSub === null ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT6"]); // parentSub is non-null
        encoder.writeInfo(info);
        if (origin !== null) {
            encoder.writeLeftID(origin);
        }
        if (rightOrigin !== null) {
            encoder.writeRightID(rightOrigin);
        }
        if (origin === null && rightOrigin === null) {
            const parent = this.parent;
            if (parent._item !== undefined) {
                const parentItem = parent._item;
                if (parentItem === null) {
                    // parent type on y._map
                    // find the correct key
                    const ykey = findRootTypeKey(parent);
                    encoder.writeParentInfo(true); // write parentYKey
                    encoder.writeString(ykey);
                } else {
                    encoder.writeParentInfo(false); // write parent id
                    encoder.writeLeftID(parentItem.id);
                }
            } else if (parent.constructor === String) {
                encoder.writeParentInfo(true); // write parentYKey
                encoder.writeString(parent);
            } else if (parent.constructor === ID) {
                encoder.writeParentInfo(false); // write parent id
                encoder.writeLeftID(parent);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
            }
            if (parentSub !== null) {
                encoder.writeString(parentSub);
            }
        }
        this.content.write(encoder, offset);
    }
    /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */ constructor(id, left, origin, right, rightOrigin, parent, parentSub, content){
        super(id, content.getLength());
        /**
     * The item that was originally to the left of this item.
     * @type {ID | null}
     */ this.origin = origin;
        /**
     * The item that is currently to the left of this item.
     * @type {Item | null}
     */ this.left = left;
        /**
     * The item that is currently to the right of this item.
     * @type {Item | null}
     */ this.right = right;
        /**
     * The item that was originally to the right of this item.
     * @type {ID | null}
     */ this.rightOrigin = rightOrigin;
        /**
     * @type {AbstractType<any>|ID|null}
     */ this.parent = parent;
        /**
     * If the parent refers to this item with some kind of key (e.g. YMap, the
     * key is specified here. The key is then used to refer to the list in which
     * to insert this item. If `parentSub = null` type._start is the list in
     * which to insert to. Otherwise it is `parent._map`.
     * @type {String | null}
     */ this.parentSub = parentSub;
        /**
     * If this type's effect is redone this type refers to the type that undid
     * this operation.
     * @type {ID | null}
     */ this.redone = null;
        /**
     * @type {AbstractContent}
     */ this.content = content;
        /**
     * bit1: keep
     * bit2: countable
     * bit3: deleted
     * bit4: mark - mark node as fast-search-marker
     * @type {number} byte
     */ this.info = this.content.isCountable() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIT2"] : 0;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @param {number} info
 */ const readItemContent = (decoder, info)=>contentRefs[info & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITS5"]](decoder);
/**
 * A lookup map for reading Item content.
 *
 * @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractContent>}
 */ const contentRefs = [
    ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
    },
    readContentDeleted,
    readContentJSON,
    readContentBinary,
    readContentString,
    readContentEmbed,
    readContentFormat,
    readContentType,
    readContentAny,
    readContentDoc,
    ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
    } // 10 - Skip is not ItemContent
];
const structSkipRefNumber = 10;
/**
 * @private
 */ class Skip extends AbstractStruct {
    get deleted() {
        return true;
    }
    delete() {}
    /**
   * @param {Skip} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor !== right.constructor) {
            return false;
        }
        this.length += right.length;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        // skip structs cannot be integrated
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpectedCase"]();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeInfo(structSkipRefNumber);
        // write as VarUint because Skips can't make use of predictable length-encoding
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lib0$40$0$2e$2$2e$114$2f$node_modules$2f$lib0$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeVarUint"](encoder.restEncoder, this.length - offset);
    }
    /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        return null;
    }
}
/** eslint-env browser */ const glo = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : ("TURBOPACK compile-time truthy", 1) ? ("TURBOPACK ident replacement", globalThis) : "TURBOPACK unreachable";
const importIdentifier = '__ $YJS$ __';
if (glo[importIdentifier] === true) {
    /**
   * Dear reader of this message. Please take this seriously.
   *
   * If you see this message, make sure that you only import one version of Yjs. In many cases,
   * your package manager installs two versions of Yjs that are used by different packages within your project.
   * Another reason for this message is that some parts of your project use the commonjs version of Yjs
   * and others use the EcmaScript version of Yjs.
   *
   * This often leads to issues that are hard to debug. We often need to perform constructor checks,
   * e.g. `struct instanceof GC`. If you imported different versions of Yjs, it is impossible for us to
   * do the constructor checks anymore - which might break the CRDT algorithm.
   *
   * https://github.com/yjs/yjs/issues/438
   */ console.error('Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438');
}
glo[importIdentifier] = true;
;
 //# sourceMappingURL=yjs.mjs.map
}),
}]);

//# sourceMappingURL=14775_yjs_dist_yjs_mjs_add2504d._.js.map