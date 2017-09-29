declare interface ArrayVariable{
    union(...arr : Array<any>) : Array<any>;
}

declare var _ : ArrayVariable;