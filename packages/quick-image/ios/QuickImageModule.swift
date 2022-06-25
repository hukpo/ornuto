import ExpoModulesCore
import SDWebImage

public class QuickImageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("QuickImage")

    ViewManager {
      View {
        QuickImageView()
      }

      Prop("uri") { (view: QuickImageView, prop: URL) in
        view.sd_imageIndicator = SDWebImageActivityIndicator.gray;
        view.sd_imageTransition = SDWebImageTransition.fade;
        view.sd_setImage(with: prop)
        view.contentMode = UIView.ContentMode.scaleAspectFill
      }
    }
  }
}
