import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DownloaderPlugin)
public class DownloaderPlugin: CAPPlugin {
        
    @objc func download(_ call: CAPPluginCall) {
        let fileName = "payslip.pdf"
        
        let timestamp = Date().timeIntervalSince1970 // Current timestamp
        let formattedDate = DateFormatter.localizedString(from: Date(), dateStyle: .medium, timeStyle: .short)
        let uniqueFileName = "payslip_\(formattedDate)_\(Int(timestamp)).pdf"
        
        let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!
        let destinationURL = documentsDirectory.appendingPathComponent(uniqueFileName)
        
        if let sourceURL = Bundle.main.url(forResource: "public/\(fileName)", withExtension: nil) {
            do {
                try FileManager.default.copyItem(at: sourceURL, to: destinationURL)
                call.resolve(["value": "success"])
            } catch {
                call.reject("Error copying file", error.localizedDescription, error)
            }
        } else {
            call.reject("Source file not found", nil, nil)
        }
    }
}
