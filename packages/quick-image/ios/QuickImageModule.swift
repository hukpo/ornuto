import ExpoModulesCore

public class QuickImageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("QuickImage")

    ViewManager {
      View {
        QuickImageView()
      }

      Prop("name") { (view: QuickImageView, prop: String) in
        print(prop)
      }
    }
  }
}
