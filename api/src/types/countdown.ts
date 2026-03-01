export type CountdownTemplate = {
    enabled: boolean;
    used_to_be_enabled: boolean | null;

    target_time: EpochTimeStamp;

}
export type CountdownData = {
    enabled: boolean;
    used_to_be_enabled: boolean;

    started_at: EpochTimeStamp | null;
    ends_at: EpochTimeStamp;

}