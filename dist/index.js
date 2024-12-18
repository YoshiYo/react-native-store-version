import compareVersions from 'compare-versions';
import { Platform } from 'react-native';
import { getAndroidVersion } from './android';
import { getIOSVersion } from './ios';
export const compareVersion = (local, remote) => {
    switch (compareVersions(local, remote)) {
        case -1:
            return 'new';
        case 1:
            return 'old';
        default:
            return 'equal';
    }
};
const checkVersion = async (params) => {
    if (!params.version) {
        throw new Error('local version is not set.');
    }
    if (Platform.OS === 'ios' && !params.iosStoreURL) {
        throw new Error('iosStoreURL is not set.');
    }
    if (Platform.OS === 'android' && !params.androidStoreURL) {
        throw new Error('androidStoreURL is not set.');
    }
    let remoteVersion;
    try {
        remoteVersion =
            Platform.OS === 'ios'
                ? await getIOSVersion(params.iosStoreURL, params.country || 'jp')
                : await getAndroidVersion(params.androidStoreURL);
    }
    catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
        throw new Error(`can't get ${Platform.OS} version`);
    }
    // Format remote version to remove build number, causing error in compareVersions function
    // No need for local version (no build number)
    // Example: from 2.0.8 (3) => 2.0.8
    remoteVersion =  remoteVersion.replace(/\s*\(.*?\)$/, '')
    const result = compareVersion(params.version, remoteVersion);
    let detail;
    switch (result) {
        case 'new':
            detail = 'remote > local';
            break;
        case 'old':
            detail = 'remote < local';
            break;
        default:
            detail = 'remote === local';
            break;
    }
    return {
        local: params.version,
        remote: remoteVersion,
        result,
        detail,
    };
};
export default checkVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxlQUFlLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQWdCdEMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQzVCLEtBQWEsRUFDYixNQUFjLEVBQ2tCLEVBQUU7SUFDbEMsUUFBUSxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3RDLEtBQUssQ0FBQyxDQUFDO1lBQ0wsT0FBTyxLQUFLLENBQUM7UUFDZixLQUFLLENBQUM7WUFDSixPQUFPLEtBQUssQ0FBQztRQUNmO1lBQ0UsT0FBTyxPQUFPLENBQUM7S0FDbEI7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxLQUFLLEVBQ3hCLE1BQTBCLEVBQ0ssRUFBRTtJQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7S0FDOUM7SUFHRCxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtRQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDNUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUN4RCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDaEQ7SUFHRCxJQUFJLGFBQXFCLENBQUM7SUFFMUIsSUFBSTtRQUNGLGFBQWE7WUFDWCxRQUFRLENBQUMsRUFBRSxLQUFLLEtBQUs7Z0JBQ25CLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO2dCQUNqRSxDQUFDLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDdkQ7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxRQUFRLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRDtJQUVELE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELElBQUksTUFBc0MsQ0FBQztJQUMzQyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssS0FBSztZQUNSLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztZQUMxQixNQUFNO1FBQ1IsS0FBSyxLQUFLO1lBQ1IsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1lBQzFCLE1BQU07UUFDUjtZQUNFLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztZQUM1QixNQUFNO0tBQ1Q7SUFHRCxPQUE2QjtRQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87UUFDckIsTUFBTSxFQUFFLGFBQWE7UUFDckIsTUFBTTtRQUNOLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcGFyZVZlcnNpb25zIGZyb20gJ2NvbXBhcmUtdmVyc2lvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBnZXRBbmRyb2lkVmVyc2lvbiB9IGZyb20gJy4vYW5kcm9pZCc7XG5pbXBvcnQgeyBnZXRJT1NWZXJzaW9uIH0gZnJvbSAnLi9pb3MnO1xuXG50eXBlIENoZWNrVmVyc2lvblBhcmFtcyA9IHtcbiAgY291bnRyeT86IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBpb3NTdG9yZVVSTD86IHN0cmluZztcbiAgYW5kcm9pZFN0b3JlVVJMPzogc3RyaW5nO1xufTtcblxudHlwZSBDaGVja1ZlcnNpb25SZXNwb25zZSA9IHtcbiAgbG9jYWw6IHN0cmluZztcbiAgcmVtb3RlOiBzdHJpbmc7XG4gIHJlc3VsdDogJ25ldycgfCAnb2xkJyB8ICdlcXVhbCc7XG4gIGRldGFpbDogJ3JlbW90ZSA+IGxvY2FsJyB8ICdyZW1vdGUgPCBsb2NhbCcgfCAncmVtb3RlID09PSBsb2NhbCc7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcGFyZVZlcnNpb24gPSAoXG4gIGxvY2FsOiBzdHJpbmcsXG4gIHJlbW90ZTogc3RyaW5nXG4pOiBDaGVja1ZlcnNpb25SZXNwb25zZVsncmVzdWx0J10gPT4ge1xuICBzd2l0Y2ggKGNvbXBhcmVWZXJzaW9ucyhsb2NhbCwgcmVtb3RlKSkge1xuICAgIGNhc2UgLTE6XG4gICAgICByZXR1cm4gJ25ldyc7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdvbGQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ2VxdWFsJztcbiAgfVxufTtcblxuY29uc3QgY2hlY2tWZXJzaW9uID0gYXN5bmMgKFxuICBwYXJhbXM6IENoZWNrVmVyc2lvblBhcmFtc1xuKTogUHJvbWlzZTxDaGVja1ZlcnNpb25SZXNwb25zZT4gPT4ge1xuICBpZiAoIXBhcmFtcy52ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhbCB2ZXJzaW9uIGlzIG5vdCBzZXQuJyk7XG4gIH1cblxuICAvKiBjaGVjayBzdG9yZSB1cmwgKi9cbiAgaWYgKFBsYXRmb3JtLk9TID09PSAnaW9zJyAmJiAhcGFyYW1zLmlvc1N0b3JlVVJMKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpb3NTdG9yZVVSTCBpcyBub3Qgc2V0LicpO1xuICB9XG5cbiAgaWYgKFBsYXRmb3JtLk9TID09PSAnYW5kcm9pZCcgJiYgIXBhcmFtcy5hbmRyb2lkU3RvcmVVUkwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuZHJvaWRTdG9yZVVSTCBpcyBub3Qgc2V0LicpO1xuICB9XG5cbiAgLyogZ2V0IHZlcnNpb24gKi9cbiAgbGV0IHJlbW90ZVZlcnNpb246IHN0cmluZztcblxuICB0cnkge1xuICAgIHJlbW90ZVZlcnNpb24gPVxuICAgICAgUGxhdGZvcm0uT1MgPT09ICdpb3MnXG4gICAgICAgID8gYXdhaXQgZ2V0SU9TVmVyc2lvbihwYXJhbXMuaW9zU3RvcmVVUkwsIHBhcmFtcy5jb3VudHJ5IHx8ICdqcCcpXG4gICAgICAgIDogYXdhaXQgZ2V0QW5kcm9pZFZlcnNpb24ocGFyYW1zLmFuZHJvaWRTdG9yZVVSTCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYGNhbid0IGdldCAke1BsYXRmb3JtLk9TfSB2ZXJzaW9uYCk7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBjb21wYXJlVmVyc2lvbihwYXJhbXMudmVyc2lvbiwgcmVtb3RlVmVyc2lvbik7XG4gIGxldCBkZXRhaWw6IENoZWNrVmVyc2lvblJlc3BvbnNlWydkZXRhaWwnXTtcbiAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICBjYXNlICduZXcnOlxuICAgICAgZGV0YWlsID0gJ3JlbW90ZSA+IGxvY2FsJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29sZCc6XG4gICAgICBkZXRhaWwgPSAncmVtb3RlIDwgbG9jYWwnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGRldGFpbCA9ICdyZW1vdGUgPT09IGxvY2FsJztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLyogY29tcGFyZSB2ZXJzaW9uICovXG4gIHJldHVybiA8Q2hlY2tWZXJzaW9uUmVzcG9uc2U+e1xuICAgIGxvY2FsOiBwYXJhbXMudmVyc2lvbixcbiAgICByZW1vdGU6IHJlbW90ZVZlcnNpb24sXG4gICAgcmVzdWx0LFxuICAgIGRldGFpbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrVmVyc2lvbjtcbiJdfQ==