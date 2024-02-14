package downloader.example.com;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;
import android.content.res.AssetManager;
import android.os.Environment;
import android.webkit.MimeTypeMap;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.Locale;
import java.text.SimpleDateFormat;

@CapacitorPlugin(name = "Downloader")
public class DownloaderPlugin extends Plugin {

    @PluginMethod
    public void download(PluginCall call) {
        Context context = getContext();
        AssetManager assetManager = context.getAssets();

        String originalFileName = "payslip.pdf";
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault()).format(new Date());
        String fileName = "payslip_" + timeStamp + ".pdf";

        try {
            InputStream inputStream = assetManager.open("public/" + originalFileName);
            File outFile = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), fileName);
            OutputStream outputStream = new FileOutputStream(outFile);
            byte[] buffer = new byte[1024];
            int length;
            while ((length = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
            }
            outputStream.flush();
            outputStream.close();
            inputStream.close();

            JSObject ret = new JSObject();
            ret.put("value", "success");
            call.resolve(ret);
        } catch (IOException e) {
            e.printStackTrace();
            JSObject ret = new JSObject();
            ret.put("error", e.getMessage());
            call.reject("error");
        }
    }
}
