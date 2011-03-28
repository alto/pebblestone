require File.expand_path(File.dirname(__FILE__) + '/../test_helper')

class HomeControllerTest < ActionController::TestCase
  
  test "the homepage" do
    get :index
    assert_response :success
  end

end
