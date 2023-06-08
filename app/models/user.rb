class User < ApplicationRecord
  validates :first_name,  
    length: { in: 2..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" },
    presence: true

  validates :last_name, 
    length: { in: 2..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" },
    presence: true

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :session_token, presence: true, uniqueness: true
  validates :zip_code, presence: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_many :reviews

  has_secure_password

  has_one_attached :photo

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    # field = crendential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(email: email)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  
  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
        
      end
  end
end
