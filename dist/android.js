const getAndroidVersion = async (storeURL = '') => {
    const appIDString = storeURL.match(/details\?id=[0-9a-zA-Z.]+/);
    if (!appIDString) {
        throw new Error('androidStoreURL is invalid.');
    }
    const response = await fetch(`https://play.google.com/store/apps/${appIDString[0]}`).then((r) => {
        if (r.status === 200) {
            return r.text();
        }
        throw new Error('androidStoreURL is invalid.');
    });
    const matches = response.match(/<span class="htlgb"><div class="IQ1z0d"><span class="htlgb">([0-9]+\.?[0-9]*\.?[0-9]*)<\/span><\/div><\/span>/);
    if (!matches) {
        throw new Error('can\'t get android app version.');
    }
    return matches[1];
};
export default getAndroidVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmRyb2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxFQUFFLFdBQW1CLEVBQUUsRUFBbUIsRUFBRTtJQUN6RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFaEUsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDaEQ7SUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxzQ0FBc0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUM5RixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQywrR0FBK0csQ0FBQyxDQUFDO0lBRWhKLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDcEQ7SUFFRCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixlQUFlLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0QW5kcm9pZFZlcnNpb24gPSBhc3luYyAoc3RvcmVVUkw6IHN0cmluZyA9ICcnKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgY29uc3QgYXBwSURTdHJpbmcgPSBzdG9yZVVSTC5tYXRjaCgvZGV0YWlsc1xcP2lkPVswLTlhLXpBLVouXSsvKTtcblxuICBpZiAoIWFwcElEU3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhbmRyb2lkU3RvcmVVUkwgaXMgaW52YWxpZC4nKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvJHthcHBJRFN0cmluZ1swXX1gKS50aGVuKChyKSA9PiB7XG4gICAgaWYgKHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiByLnRleHQoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuZHJvaWRTdG9yZVVSTCBpcyBpbnZhbGlkLicpO1xuICB9KTtcblxuICBjb25zdCBtYXRjaGVzID0gcmVzcG9uc2UubWF0Y2goLzxzcGFuIGNsYXNzPVwiaHRsZ2JcIj48ZGl2IGNsYXNzPVwiSVExejBkXCI+PHNwYW4gY2xhc3M9XCJodGxnYlwiPihbMC05XStcXC4/WzAtOV0qXFwuP1swLTldKik8XFwvc3Bhbj48XFwvZGl2PjxcXC9zcGFuPi8pO1xuXG4gIGlmICghbWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2FuXFwndCBnZXQgYW5kcm9pZCBhcHAgdmVyc2lvbi4nKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzWzFdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QW5kcm9pZFZlcnNpb247XG4iXX0=