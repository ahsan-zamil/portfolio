import java.io.*;
import java.util.*;

public class Solution {
    public static long getMinimumCost(String sStr, String tStr) {
        int nLen = sStr.length();
        int mLen = tStr.length();
        if (mLen > nLen) return -1L;
        ArrayList<Integer>[] buckets = new ArrayList[26];
        for (int i = 0; i < 26; i++) buckets[i] = new ArrayList<>();
        for (int i = 0; i < nLen; i++) buckets[sStr.charAt(i) - 'a'].add(i);
        long sumIdx = 0L;
        int bound = nLen;
        for (int j = mLen - 1; j >= 0; j--) {
            ArrayList<Integer> list = buckets[tStr.charAt(j) - 'a'];
            if (list.isEmpty()) return -1L;
            int lo = 0, hi = list.size() - 1, pick = -1;
            while (lo <= hi) {
                int mid = (lo + hi) >>> 1;
                if (list.get(mid) < bound) {
                    pick = mid;
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
            if (pick == -1) return -1L;
            int chosenIndex = list.get(pick);
            sumIdx += chosenIndex;
            bound = chosenIndex;
        }
        long m = mLen;
        long n = nLen;
        long result = m * (n - m) + (m * (m - 1) / 2) - sumIdx;
        return result;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        String t = br.readLine();
        if (s == null || t == null) {
            System.out.println(-1);
            return;
        }
        System.out.println(getMinimumCost(s.trim(), t.trim()));
    }
}
