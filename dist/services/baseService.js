"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class BaseService
 */
class BaseService {
    /**
     * Fetches al docs from the storage
     * @param {string} json
     * @returns {Promise<T>}
     */
    /* async find(json: Object = {}): Promise<T> {
        const doc: T = await this.Repository.find(json);
        return doc;
    } */
    /**
     * Fetches all docs from the storage
     * @returns {Promise<T[]>}
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Repository.find();
        });
    }
    /**
     * Fetches single doc from the storage by id
     * @param {string} id
     * @returns {Promise<T>}
     */
    /* async findById(id: string): Promise<T> {
        const doc: T = await this.Repository.findById(id);
        return doc;
    } */
    /**
     * Saves the doc in the storage
     * @param {T} doc
     * @returns {Promise<T>}
     */
    save(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield new this.Repository(doc).save()).toObject({ virtuals: true });
        });
    }
    /**
     * Deletes a single doc from storage
     * @returns {Promise<object>}
     */
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Repository.deleteOne({ _id: id });
        });
    }
}
exports.default = BaseService;
