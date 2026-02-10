import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "End User License Agreement (EULA)",
    description: "End User License Agreement for emptea studios apps.",
};

export default function EulaPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-4">
                <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground sm:text-5xl">
                    End User License Agreement
                </h1>
                <p className="text-muted-foreground">
                    Last updated: October 2024
                </p>
            </header>

            <div className="prose prose-gray max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    This End User License Agreement (“Agreement”) is a binding legal
                    agreement between you and Maruthan Thanabalasingam regarding your use of our
                    mobile applications.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Scope of License</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Maruthan Thanabalasingam grants you a limited, non-exclusive, non-transferable,
                    revocable license to use the application for your personal, non-commercial
                    purposes. You may not copy, modify, distribute, sell, or lease any
                    part of our services or included software, nor may you reverse
                    engineer or attempt to extract the source code of that software,
                    except as laws prohibit those restrictions or you have our written
                    permission.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Content and Services</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    The application may enable access to third-party services and websites.
                    Use of the application requires Internet access and may require you to
                    accept additional terms of service. You agree that you will not use
                    the application for any purpose that is prohibited by this Agreement.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Warranty Disclaimer</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground uppercase text-sm tracking-wide">
                    YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE APPLICATION IS
                    AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY
                    QUALITY, PERFORMANCE, ACCURACY, AND EFFORT IS WITH YOU. TO THE
                    MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION AND ANY
                    SERVICES PERFORMED OR PROVIDED BY THE APPLICATION ARE PROVIDED "AS
                    IS" AND "AS AVAILABLE", WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY
                    KIND.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Limitation of Liability</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground uppercase text-sm tracking-wide">
                    TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL MARUTHAN THANABALASINGAM
                    BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT
                    OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION,
                    DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION OR
                    ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED
                    TO YOUR USE OR INABILITY TO USE THE APPLICATION, HOWEVER CAUSED,
                    REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE)
                    AND EVEN IF MARUTHAN THANABALASINGAM HAS BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Termination</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    The license is effective until terminated by you or Maruthan Thanabalasingam.
                    Your rights under this license will terminate automatically without
                    notice from Maruthan Thanabalasingam if you fail to comply with any term(s) of
                    this license. Upon termination of the license, you shall cease all
                    use of the application and destroy all copies, full or partial, of
                    the application.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Governing Law</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    This Agreement and the relationship between you and Maruthan Thanabalasingam
                    shall be governed by the laws of the jurisdiction where Maruthan
                    Thanabalasingam is located, excluding its conflicts of law provisions.
                </p>

                <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Contact</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    If you have any questions about this Agreement, please contact us at{" "}
                    <a
                        className="text-primary hover:underline underline-offset-4"
                        href="mailto:maruthan@outlook.com"
                    >
                        maruthan@outlook.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
