function minPatches(nums: number[], n: number): number {
    let max = 0;
    let patchT = 0;
    let idx = 0;

    while (max < n){
        if(idx < nums.length && nums[idx] <= max + 1){
            max += nums[idx];

            idx++;
            continue;
        }
        else{ 
            max += max + 1;

            patchT += 1;
            continue;
        }
    }
    return patchT;
};
