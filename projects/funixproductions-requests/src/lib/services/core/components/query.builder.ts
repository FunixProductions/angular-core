export class QueryParam  {
  key: string = '';
  type: string = ':eq:';
  value?: string | string[];
}
export class QueryBuilder {

  static like: string = ':like:'
  static likeIgnoreCase: string = ':likeic:'
  static notLike: string = ':nlike:'
  static startWith: string = ':sw:'
  static startWithIgnoreCase: string = ':swic:'
  static endWith: string = ':ew:'
  static endWithIgnoreCase: string = ':ewic:'
  static equal: string = ':eq:'
  static equalIgnoreCase: string = ':eqic:'
  static notEqual: string = ':neq:'
  static greater: string = ':gt:'
  static greaterOrEquals: string = ':gte:'
  static lower: string = ':lt:'
  static lowerOrEquals: string = ':lte:'
  static isTrue: string = ':istrue:'
  static isFalse: string = ':isfalse:'
  static isNull: string = ':isnull:'
  static isNotNull: string = ':isnotnull:'

  queryArray: QueryParam[] = [];

  get(): string {
    if (this.queryArray.length <= 0) {
      return "";
    }
    const queryList: string[] = [];
    this.queryArray.forEach(it => {
      if (Array.isArray(it.value)) {
        if (it.value.length === 1) {
          queryList.push(it.key + it.type + it.value[0])
        } else {
          queryList.push(it.key + it.type + '[' + it.value.join('|') + ']')
        }
      } else {
        queryList.push(it.key + it.type + it.value)
      }
    });
    return queryList.join(',');
  }

  addParam(param: QueryParam) : QueryBuilder {
    if (param.key.length > 0) {
      if (!param.value || param.value.length <= 0) {

        const indexToRemove = this.queryArray.findIndex(q => q.key === param.key);
        if (indexToRemove >= 0) {
          this.queryArray.splice(indexToRemove, 1);
        }

      } else {
        this.addParamOnlyIfAbsent(param);
      }
    }
    return this;
  }

  reset(): void {
    this.queryArray = [];
  }

  private addParamOnlyIfAbsent(param: QueryParam): void {
    const indexToUpdate = this.queryArray.findIndex(q => q.key === param.key);

    if (indexToUpdate >= 0) {
      this.queryArray[indexToUpdate] = param;
    } else {
      this.queryArray.push(param);
    }
  }

}
