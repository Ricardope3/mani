module.exports = class TaxiRecord {
    constructor(VendorID, lpep_pickup_datetime, lpep_dropoff_datetime, store_and_fwd_flag, RatecodeID, PULocationID, DOLocationID, passenger_count, trip_distance, fare_amount, extra, mta_tax, tip_amount, tolls_amount, ehail_fee, improvement_surcharge, total_amount, payment_type, trip_type, congestion_surcharge) {
        this.VendorID = VendorID;
        this.lpep_pickup_datetime = lpep_pickup_datetime;
        this.lpep_dropoff_datetime = lpep_dropoff_datetime;
        this.store_and_fwd_flag = store_and_fwd_flag;
        this.RatecodeID = RatecodeID;
        this.PULocationID = PULocationID;
        this.DOLocationID = DOLocationID;
        this.passenger_count = passenger_count;
        this.trip_distance = trip_distance;
        this.fare_amount = fare_amount;
        this.extra = extra;
        this.mta_tax = mta_tax;
        this.tip_amount = tip_amount;
        this.tolls_amount = tolls_amount;
        this.ehail_fee = ehail_fee;
        this.improvement_surcharge = improvement_surcharge;
        this.total_amount = total_amount;
        this.payment_type = payment_type;
        this.trip_type = trip_type;
        this.congestion_surcharge = congestion_surcharge;
    }
}